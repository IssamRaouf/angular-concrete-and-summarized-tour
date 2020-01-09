import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';
import {TodoRestService} from '../services/todo-rest.service';
import {tick} from '@angular/core/testing';

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

    public getUserById(userId: number): UserModel {
        return this.usersList.find(usr => usr.id === userId);
    }

    public onDeleteTicket(ticket: Ticket): void {
        this.todoRestServ.deleteTodo(ticket).subscribe((result: any) => {
            const indexTicket = this.ticketList.findIndex(tk => tk.id === ticket.id);
            this.ticketList.splice(indexTicket, 1);
            alert('opration passé avec success');
        });
    }

    public onEditTicket(ticket: Ticket): void {
        this.editTicketSend.emit(ticket);
    }

}
