import {Pipe, PipeTransform} from '@angular/core';
import {Ticket} from '../models/ticket.model';


@Pipe({
    name: 'appfilterTickets'
})


export class FilterTicketsPipes implements PipeTransform {
    transform(list: Array<Ticket> = [], byField: string = 'name', likeTerm: string = null): Array<Ticket> {
        const ticketForCheck = new Ticket({name: '', description: '', type: 'aaa', price: 0, hideDesc: false});
        if (list.length === 0 || likeTerm === null) {

            return list;
        }

        if (!ticketForCheck.hasOwnProperty(byField) || byField === 'hideDesc') {
            const message = byField === 'hideDesc' ? `Cannot filter with this field ${byField}  , try with other` :
                `This is ${byField}  not exist on type Ticket , try with other`;

            alert(message);
            return list;
        }

        return list.filter(ticketIn => (ticketIn[byField] as string).toLocaleLowerCase().indexOf(likeTerm.toLocaleLowerCase()) !== -1);

    }
}
