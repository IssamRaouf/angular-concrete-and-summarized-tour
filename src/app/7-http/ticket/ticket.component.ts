import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

    @Output() deleteTicketSend: EventEmitter<Ticket> = new EventEmitter<Ticket>();
    @Output() editTicketSend: EventEmitter<Ticket> = new EventEmitter<Ticket>();

    constructor() {

    }

    ngOnInit() {
    }

    public deleteTicket(ticket: Ticket): void {
        this.deleteTicketSend.emit(ticket);
    }

    public editTicket(ticket: Ticket): void {
        this.editTicketSend.emit(ticket);
    }

}
