````javascript
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
    @Input() ticket: Ticket;
    @Input() user: UserModel;

    @Output() deleteTicketSend: EventEmitter<Ticket> = new EventEmitter<Ticket>();
    @Output() editTicketSend: EventEmitter<Ticket> = new EventEmitter<Ticket>();

    constructor() {

    }

    ngOnInit() {
    }

    /**
     * enovoye au list-todo-component pour la traiter ,via (output deleteTicketSend)
     * @param ticket
     *
     * NB:On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
     * etc pour la cominication entre les components de multi niveaux (child, parent ...)
     * mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent ...)
     */
    public deleteTicket(ticket: Ticket): void {
        this.deleteTicketSend.emit(ticket);
    }

    /**
     * Envoye au list-todo-component qu'il va l'envoyer au todo-component , qu'il va l'envoyer au todo-form
     * pour la traiter ,via (output deleteTicketSend)
     * @param ticket
     *
     * NB:On peut faire simple service avec simple subject<{operation:'EDIT'|'DELETE':'ADD',ticket:ticket}>
     * etc pour la cominication entre les components de multi niveaux (child, parent ...)
     * mais C'est le temps de voir le fonctionnement de input output par sur multi niveaux (child, parent ...)
     */
    public editTicket(ticket: Ticket): void {
        this.editTicketSend.emit(ticket);
    }

}

````


