import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TodoRestService} from '../services/todo-rest.service';
import {UserModel} from '../models/user.model';
import {tick} from '@angular/core/testing';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public ticketListMook: Array<Ticket> = [];
    public usersListMook: Array<UserModel> = [];

    public isLoading: boolean;

    public ticketToEdit: Ticket;

    constructor(private todoRestServ: TodoRestService) {
    }


    ngOnInit() {
        this.loadUsersList();
        this.loadTicketsList();
    }

    /**
     * load list ticket
     */

    public loadTicketsList(): void {
        this.isLoading = true;
        this.todoRestServ.getListTodo().subscribe(
            (list: Array<Ticket>) => {
                this.ticketListMook = list;
                // juste pour voir loading :D
                setTimeout(() => this.isLoading = false, 800);
            });
    }

    /**
     * load list users
     */
    public loadUsersList(): void {
        this.isLoading = true;
        this.todoRestServ.getListUsers().subscribe(
            (list: Array<UserModel>) => {
                this.usersListMook = list;
                setTimeout(() => this.isLoading = false, 800);
            });
    }

    /**
     * add ticket to list
     * @param ticket
     */
    public addTicket(ticket: Ticket): void {
        this.ticketListMook = [ticket, ...this.ticketListMook];
    }

    /**
     * asssigne ticket, envoyer a partir de list-todo-component (output)
     * pour l'envoyer a form (input)
     * @param ticket
     * NB:On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
     * etc pour la cominication entre les components de multi niveaux (child, parent ...)
     * mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent ...)
     *
     */
    public editTicket(ticket: Ticket): void {
        this.ticketToEdit = ticket;
    }

    /**
     * modifier ticket sur la liste , envoyer a partir de form-component (output)
     * @param ticket
     *
     * NB:On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
     * etc pour la cominication entre les components de multi niveaux (child, parent ...)
     * mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent ...)
     */
    public onEdit(ticket: Ticket): void {
        const indexTicketEdited = this.ticketListMook.findIndex(tk => tk.id === ticket.id);
        this.ticketListMook[indexTicketEdited] = ticket;
    }


}
