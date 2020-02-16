import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMock: Array<Ticket> = [];
    private descriptionMock = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    constructor() {
        this.ticketListMock = [
            new Ticket({name: 'Content projection', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMock, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.DESIGN}),
        ];
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMock.unshift(ticket);
    }

    public onLoad(event) {
        console.log('onLoad', event);
    }

    public onError(event) {
        console.log('onError', event);
    }
}
