````html
<div class="container container-todo-form">
    <h2>{{titleOperation}}</h2>
    <form [formGroup]="formTicket"  class="form-container" novalidate>

        <mat-form-field>
            <mat-select placeholder="User" formControlName="userId">
                <mat-option *ngFor="let user of usersList" [value]="user.id">{{user.username}}</mat-option>
            </mat-select>
            <mat-error *ngIf="controls.userId.hasError('required')">Champ obligatoire</mat-error>
            <mat-hint *ngIf="isRequired(controls.userId)">required</mat-hint>
        </mat-form-field>

        <mat-form-field>
            <input matInput placeholder="Le nom de ticket" formControlName="title">
            <mat-error *ngIf="controls.title.hasError('required')">Champ obligatoire</mat-error>
            <mat-hint *ngIf="isRequired(controls.title)">required</mat-hint>
        </mat-form-field>


        <mat-checkbox
                [indeterminate]="'true'"
                [labelPosition]="'after'"
                formControlName="completed">
            Terminé
        </mat-checkbox>
        <button mat-raised-button color="primary" (click)="onClean()">Clean</button>
        <button mat-raised-button color="primary" (click)="onSubmit()">Envoyer</button>
    </form>
</div>
````

