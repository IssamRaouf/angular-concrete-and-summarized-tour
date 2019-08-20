import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {
    @Input() ticket: Ticket;
    @Input() name: number;

    constructor() {
    }

    ngOnInit() {
    }

}
