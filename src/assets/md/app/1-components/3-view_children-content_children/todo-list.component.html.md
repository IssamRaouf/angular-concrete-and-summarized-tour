```html
<div class="container-todo-list">

    <div #header></div>

    <div class="row">
        <ng-template *ngIf="ticketList.length == 0; else ticketsShow;">
            <div class="alert alert-info"> aucune Ticket n'existe, pouvez-vous l'ajouter !</div>
        </ng-template>

        <ng-template #ticketsShow>

            <div class="col-lg-4" *ngFor="let ticket of ticketList; let i = index">
                <app-ticket [ticket]="ticket" [index]="i"></app-ticket>
            </div>
            
            <!-- BEGIN Project un enfant app ticket a partir de compoent hot (TodoComponent) -->
            <div class="col-lg-4">
            <ng-content></ng-content>
            </div>
            <!-- END Project un enfant app ticket a partir de compoent hot (TodoComponent) -->

        </ng-template>
    </div>
</div>


```

