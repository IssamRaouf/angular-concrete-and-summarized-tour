````html
<mat-card>
    <mat-card-header>
        <mat-card-title>{{ticket.title |titlecase}}</mat-card-title>
        <mat-card-subtitle>Ticket id : {{ticket.id}}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
        <p>User : {{user.username}}</p>
        <p>Compnay : {{user.company.name}}</p>
    </mat-card-content>
    <mat-card-actions>
        <button mat-raised-button color="primary" (click)="editTicket(ticket)">Edit</button>
        <button mat-raised-button color="accent" (click)="deleteTicket(ticket)">Delete</button>
    </mat-card-actions>
</mat-card>

````


