````html
<div class="container-todo-list">

    <div class="row">
        <ng-template *ngIf="ticketList.length == 0; else ticketsShow;">
            <div class="alert alert-info"> aucune Ticket n'existe, pouvez-vous l'ajouter !</div>
        </ng-template>
        <ng-template #ticketsShow>
            <p class="col-lg-12">Nombre des tickets est : {{ticketList.length}}</p>
            <div class="col-lg-3" *ngFor="let ticket of ticketList">
                <app-ticket [ticket]="ticket" [user]="getUserById(ticket.userId)"
                            (deleteTicketSend)="onDeleteTicket($event)"
                            (editTicketSend)="onEditTicket($event)">

                </app-ticket>
            </div>
        </ng-template>
    </div>
</div>
````
