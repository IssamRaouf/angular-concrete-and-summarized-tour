import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../1-components/1-content-projection/models/ticket.model';
import {TicketTypeEnum} from '../../1-components/1-content-projection/enum/ticket-type.enum';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public ticketListMook: Array<Ticket> = [];
    private descriptionMook = `dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                                , consetetur sadipscing elitr,
                                 sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                                 dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;

    constructor() {
        this.ticketListMook = [
            new Ticket({name: 'Content projection', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMook, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.DESIGN},),
            new Ticket({name: 'Content projection', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMook, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.DESIGN},),
        ];
    }

    ngOnInit() {
    }

}
