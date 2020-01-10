import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';
import {TodoRestService} from '../services/todo-rest.service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input() ticketList: Array<Ticket>;
    @Input() usersList: Array<UserModel> = [];
    @Output() editTicketSend: EventEmitter<Ticket> = new EventEmitter<Ticket>();

    constructor(private todoRestServ: TodoRestService) {

    }


    ngOnInit() {
    }

    /**
     * obtenir l'utilisateur par id pour l'envoyer au ticket
     * @param userId
     */
    public getUserById(userId: number): UserModel {
        return this.usersList.find(usr => usr.id === userId);
    }

    /**
     * traitement de delete ticket ici parce qu'on a la liste ici et on peut la traiter ici
     * sans besoin de partir au todo-component..
     * @param ticket
     */
    public onDeleteTicket(ticket: Ticket): void {
        this.todoRestServ.deleteTodo(ticket).subscribe((result: any) => {
            const indexTicket = this.ticketList.findIndex(tk => tk.id === ticket.id);
            this.ticketList.splice(indexTicket, 1);
        });
    }

    /**
     * Envoyer ticket au todo-component pour pouvoir l'envoyer au todo-Form
     *
     * NB:On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
     * etc pour la cominication entre les components de multi niveaux (child, parent ...)
     * mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent ...)
     *
     * @param ticket
     */
    public onEditTicket(ticket: Ticket): void {
        this.editTicketSend.emit(ticket);
    }

}
