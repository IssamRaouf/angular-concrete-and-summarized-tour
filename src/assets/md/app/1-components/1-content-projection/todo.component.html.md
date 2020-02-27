

```html
<div class="container container-todo">

    <app-todo-form (sendTicket)="addTicket($event)">
        <!--BEGIN Projection de contenur exemple 1 -->
        <h3>Form simple pour ajouter des ticket (projection de contenu)</h3>
        <p>Enjoy Projection de contenu</p>
        <!--BEGIN Projection de contenur exemple 1 -->
    </app-todo-form>

    <app-todo-list [ticketList]="ticketListMock">
        <!--BEGIN Projection de contenur exemple 2 -->
        <h3> Prejection de contenu par element tag</h3>
        <button mat-raised-button class="hello-world" (click)="onAlert()">Button projet on child</button>
        <!--BEGIN Projection de contenur exemple 2 -->
    </app-todo-list>
</div>

```

