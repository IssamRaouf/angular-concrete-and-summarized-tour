import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {IntroJsHelperService} from '../../../services/intro-js-helper.service';
import {Step} from 'intro.js';


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, AfterViewInit {
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

    public ngAfterViewInit(): void {
        const steps: Array<Step> = [
            {
                intro: 'This is a tooltip.',
            },
            {
                element: document.querySelector('#read-me-first'),
                intro: 'This is a tooltip.',
            },
            {
                element: document.querySelector('#exmple-in'),
                intro: 'This is a tooltip.'
            },
            {
                element: document.querySelector('#demo'),
                intro: 'This is a tooltip.'
            }
        ];
        IntroJsHelperService.introJsInit(steps);
    }

    public addTicket(ticket: Ticket): void {
        this.ticketListMock.unshift(ticket);
    }

    public onAlert(): void {
        alert('Alert button project on child component from parent');
    }


}
