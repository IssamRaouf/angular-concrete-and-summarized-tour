import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public ticketListMock: Array<Ticket> = [];
    private descriptionMock = 'accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    constructor() {
        this.ticketListMock = [
            new Ticket({id: 1, name: 'Content projection', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({id: 2, name: 'Filtre ticket', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({id: 3, name: 'Integration dashboard', description: this.descriptionMock, type: TicketTypeEnum.INTE}),
            new Ticket({id: 4, name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({id: 5, name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.DESIGN},),
            new Ticket({id: 6, name: 'Content projection', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({id: 7, name: 'Filtre ticket', description: this.descriptionMock, type: TicketTypeEnum.DEV}),
            new Ticket({id: 8, name: 'Integration dashboard', description: this.descriptionMock, type: TicketTypeEnum.INTE}),
            new Ticket({id: 9, name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({id: 10, name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.DESIGN},),
        ];
    }

    ngOnInit() {
    }

}
