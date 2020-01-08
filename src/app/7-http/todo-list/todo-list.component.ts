import {Component, OnInit, Input} from '@angular/core';
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
        // @Todo
    }

}
