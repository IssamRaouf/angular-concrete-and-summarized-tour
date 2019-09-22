import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {from, of, fromEvent, interval} from 'rxjs';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMook: Array<Ticket> = [];
    private descriptionMook = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';


    public observableOfResult: string;
    public observableFromResult = '';
    public observableFromEventResult = 'No';
    public observableIntervalResult = 0;

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
        // 1) of
        const observableOf = of('Hello form obervable of');
        observableOf.subscribe((res) => {
            this.observableOfResult = res;
        });

        // 2) form
        const observableFrom = from(['Issam', 'Raouf', 'is', 'a ', 'lead', 'developer']);
        observableFrom.subscribe(res => {
            this.observableFromResult += ` ${res}`;
        });

        // 3) fromEvent
        const obsFromEvent = fromEvent(document, 'click');
        obsFromEvent.subscribe((isClicked) => {
            this.observableFromEventResult = 'Yes';
        });

        const obsInterval = interval(2000);
        obsInterval.subscribe((res) => {
            this.observableIntervalResult = res;
        });


    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMook = [ticket, ...this.ticketListMook];
    }
}
