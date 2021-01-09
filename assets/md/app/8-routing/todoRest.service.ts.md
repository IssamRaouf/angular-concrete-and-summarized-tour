````javascript
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';

@Injectable()
export class TodoRestService {

    public getDetailsTodoMock(idTodo: number): Observable<Ticket> {
        return of(new Ticket({
                id: idTodo,
                name: 'Filtre ticket',
                description: 'accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
                type: TicketTypeEnum.DEV
            })
        );
    }


}
````
