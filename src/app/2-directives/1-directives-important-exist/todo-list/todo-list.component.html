<div class="container-todo-list">
    <h1>ticket (*ngFor exemple 1)</h1>
    <div class="row">
        <ng-template *ngIf="ticketList.length == 0; else ticketsShow;">
            <div class="alert alert-info"> aucune Ticket n'existe, pouvez-vous l'ajouter !</div>
        </ng-template>

        <ng-template #ticketsShow>
            <!-- Begin ngFor exemple One -->
            <div class="col-lg-4" *ngFor="let ticket of ticketList">
                <app-ticket [ticket]="ticket"></app-ticket>
            </div>
            <!-- END ngFor exemple One -->
        </ng-template>
    </div>

    <h1>ticket grouper par type (*ngFor exemple 2)</h1>
    <!-- Begin ngFor exemple 2 -->
    <div class="row" *ngFor="let group of ticketListGroupedByType">
        <div class="col-lg-12"><h3> {{group.name}}</h3></div>
        <div class="col-lg-4" *ngFor="let ticket of group.values">
            <app-ticket [ticket]="ticket"></app-ticket>
        </div>
    </div>
    <!-- END ngFor exemple 2 -->


    <h1>ticket grouper par type (*ngIf) (on affiche juste le type development)</h1>
    <!-- Begin ngIf exemple 1 -->

    <div class="row" *ngFor="let group of ticketListGroupedByType">
        <ng-container *ngIf="group.name === ticketsEnum.DEV">
            <div class="col-lg-12"><h3> {{group.name}}</h3></div>
            <div class="col-lg-4" *ngFor="let ticket of group.values">
                <app-ticket [ticket]="ticket"></app-ticket>
            </div>
        </ng-container>
    </div>
    <!-- END ngIf exemple 1 -->


    <h1>ticket grouper par type (*ngSwitch) </h1>
    <!-- Begin ngSwitch exemple 1
       on peut utiliser juste (ngClass ou ngStyle..)
       mais ici on va utiliser ngSwitch pour voir le fonctionement de ngSwitch
    -->

    <div class="row" *ngFor="let group of ticketListGroupedByType">

        <div class="col-lg-12"><h3> {{group.name}}</h3></div>
        <ng-container [ngSwitch]="group.name">
            <ng-container *ngSwitchCase="this.ticketsEnum.DEV">
                <div class="col-lg-4" *ngFor="let ticket of group.values">
                    <app-ticket class="back-gray" [ticket]="ticket"></app-ticket>
                </div>
            </ng-container>
            <ng-container *ngSwitchCase="this.ticketsEnum.DESIGN">
                <div class="col-lg-4 back-red" *ngFor="let ticket of group.values">
                    <app-ticket [ticket]="ticket"></app-ticket>
                </div>
            </ng-container>
            <ng-container *ngSwitchCase="this.ticketsEnum.CONCEPTION">
                <div class="col-lg-4 back-green"
                     *ngFor="let ticket of group.values">
                    <app-ticket [ticket]="ticket"></app-ticket>
                </div>
            </ng-container>
            <ng-container *ngSwitchDefault>
                <div class="col-lg-4 back-yellow"
                     *ngFor="let ticket of group.values">
                    <app-ticket [ticket]="ticket"></app-ticket>
                </div>
            </ng-container>
        </ng-container>


    </div>
    <!-- END ngIf exemple 1 -->

</div>



