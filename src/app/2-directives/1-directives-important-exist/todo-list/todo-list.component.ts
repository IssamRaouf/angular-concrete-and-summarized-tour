import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {
    @Input() ticketList: Array<Ticket>;
    public ticketListGroupedByType: Array<object>;
    public readonly ticketsEnum = TicketTypeEnum;

    constructor() {
    }

    /**
     * pour reconstruire la liste goupée à chaque fois qu'on ajoute un nouveau ticket
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {

        this.ticketListGroupedByType = this.groupedTicketByType(this.ticketList);
    }

    ngOnInit() {


    }


    private groupedTicketByType(tickets: Array<Ticket>): Array<object> {
        if (tickets.length === 0) {
            return [];
        }
        const result = tickets.reduce((accumulator, currVal) => {
            (accumulator[currVal.type] || (accumulator[currVal.type] = [])).push(currVal);
            return accumulator;
        }, []);

        return Object.keys(result).map(key => ({name: key, values: result[key]}));
    }

}
