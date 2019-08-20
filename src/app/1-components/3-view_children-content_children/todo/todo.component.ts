import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


    public ticketListMook: Array<Ticket>;
    private descriptionMook = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';
    /**
     * projecté un ticketComponent direct compoentTodoList
     */
    public ticketProjectToList: Ticket;

    constructor() {
        this.ticketListMook = [
            new Ticket({name: 'Content projection', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', description: this.descriptionMook, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', description: this.descriptionMook, type: TicketTypeEnum.DESIGN}),
        ];
        this.ticketProjectToList = new Ticket({
            name: 'ticket Projecté a partir de compnent hot (TodoComponent) ',
            description: this.descriptionMook,
            type: TicketTypeEnum.DEV
        });
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        // réaffecter la liste pour le hooks (sur le child (ngOnChanges detected))
        this.ticketListMook = [ticket, ...this.ticketListMook];

        // cette ligne la ajouter à la liste mais ne declanche pas le (ngOnchanges);

        //   this.ticketListMook.unshift(ticket);
    }
}
