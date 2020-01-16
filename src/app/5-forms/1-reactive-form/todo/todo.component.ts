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
    public ticketListMock: Array<Ticket> = [];
    private descriptionMock = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    constructor() {

        const author = new Author({firstName: 'Issam', lastName: 'Raouf', email: 'iraouf.soft@gmail.com', grade: GradeEnum.DEV});

        this.ticketListMock = [
            new Ticket({name: 'Content projection', description: this.descriptionMock, type: TicketTypeEnum.DEV, author}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMock, type: TicketTypeEnum.DEV, author}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMock, type: TicketTypeEnum.INTE, author}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.CONCEPTION, author}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMock, type: TicketTypeEnum.DESIGN, author}),
        ];
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMock.unshift(ticket);
    }
}
