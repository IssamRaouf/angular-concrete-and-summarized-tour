import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
    @Input() ticket: Ticket;
    @Input() user: UserModel;

    constructor() {
    }

    ngOnInit() {
    }

}
