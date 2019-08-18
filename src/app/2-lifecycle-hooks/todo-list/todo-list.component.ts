import {Component, OnInit, Input} from '@angular/core';
import {Ticket} from '../models/ticket.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input() ticketList: Array<Ticket>;

    constructor() {
    }

    ngOnInit() {
    }

}
