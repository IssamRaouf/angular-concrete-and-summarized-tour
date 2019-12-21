import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMook: Array<Ticket> = [];
    private descriptionMook = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    public likeTerm = new FormControl('');
    public byField = new FormControl('name');
    public fields = ['name', 'type', 'description'];

    constructor() {
        this.ticketListMook = [
            new Ticket({name: 'Content projection', price: 19000990, description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Filtre ticket', price: 1200, description: this.descriptionMook, type: TicketTypeEnum.DEV}),
            new Ticket({name: 'Integration dashboard', price: 5000, description: this.descriptionMook, type: TicketTypeEnum.INTE}),
            new Ticket({name: 'Gestion utilisateur', price: 30000000, description: this.descriptionMook, type: TicketTypeEnum.CONCEPTION}),
            new Ticket({name: 'Gestion utilisateur', price: 7000000000, description: this.descriptionMook, type: TicketTypeEnum.DESIGN}),
        ];
    }

    ngOnInit() {
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMook.unshift(ticket);
    }
}
