import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMook: Array<Ticket> = [];
    private descriptionMook = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    constructor() {
        this.ticketListMook = [
            new Ticket({name: 'Content projection', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMook, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.DESIGN}),
        ];
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMook = [ticket, ...this.ticketListMook];
    }
}
