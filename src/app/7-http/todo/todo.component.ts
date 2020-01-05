import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TodoRestService} from '../services/todo-rest.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMook: Array<Ticket> = [];
    public isLoading: boolean;

    constructor(private todoRestServ: TodoRestService) {

    }


    ngOnInit() {
        this.loadTicketsList();
    }

    public loadTicketsList(): void {
        this.isLoading = true;
        this.todoRestServ.getListTodo().subscribe(
            (list: Array<Ticket>) => {
                this.ticketListMook = list;
                // juste pour voir loading :D
                setTimeout(() => this.isLoading = false, 1500);
            });
    }

    public addTicket(ticket: Ticket): void {
        // @Todo
    }
    public editTicket(ticket: Ticket): void {
        // @Todo
    }

    public deleteTicket(ticket: Ticket): void {
        // @Todo
    }
}
