import {Component, OnInit, Input} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input() ticketList: Array<Ticket>;
    @Input() usersList: Array<UserModel> = [];

    constructor() {
    }

    ngOnInit() {
    }

    public getUserById(userId: number): UserModel {
        return this.usersList.find(usr => usr.id === userId);
    }

}
