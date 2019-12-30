import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {Author} from '../models/author.model';
import {GradeEnum} from '../enum/grade.enum';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMook: Array<Ticket> = [];
    private descriptionMook = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    constructor() {

        const author = new Author({firstName: 'Issam', lastName: 'Raouf', email: 'iraouf.soft@gmail.com', grade: GradeEnum.DEV});

        this.ticketListMook = [
            new Ticket({name: 'Content projection', description: this.descriptionMook, type: TicketTypeEnum.DEV, author}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMook, type: TicketTypeEnum.DEV, author}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMook, type: TicketTypeEnum.INTE, author}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION, author}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.DESIGN, author}),
        ];
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMook.unshift(ticket);
    }
}
