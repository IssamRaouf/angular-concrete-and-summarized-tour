
```javascript
import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material';
import {CodeDetailsComponent} from '../../../code-details/code-details.component';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public ticketListMock: Array<Ticket> = [];
    private descriptionMock = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut';

    constructor(private matBottomSheet: MatBottomSheet) {
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

    public addTicket(ticket: Ticket): void {
        this.ticketListMock.unshift(ticket);
    }

    public onAlert(): void {
        alert('Alert button project on child component from parent');
    }


    public showCode(): void {
        const config = new MatBottomSheetConfig();
        config.panelClass = 'code-details';
        config.data =
        this.matBottomSheet.open(CodeDetailsComponent, config);
    }


}



```

