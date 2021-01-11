```html
<div class="container container-todo-form">

    <form [formGroup]="formTicket" class="form-container" novalidate>
        <mat-form-field>
            <h2> Exemple de directive 'string only' essayez de entrer des numbers ou caractre speciale ... </h2>
            <input matInput placeholder="Le nom de ticket" formControlName="name" appCaractereOnly>
            <mat-error *ngIf="controls.name.hasError('required')">Champ obligatoire</mat-error>
            <mat-hint *ngIf="isRequired(controls.name)">required</mat-hint>
        </mat-form-field>


        <mat-form-field>
            <mat-select placeholder="type de ticket" formControlName="type">
                <mat-option *ngFor="let option of typesAsSelect" [value]="option.val">{{option.text}}</mat-option>
            </mat-select>
            <mat-error *ngIf="controls.type.hasError('required')">Champ obligatoire</mat-error>
            <mat-hint *ngIf="isRequired(controls.type)">required</mat-hint>
        </mat-form-field>

        <mat-form-field>
            <textarea matInput placeholder="Description du ticket" formControlName="description"></textarea>
            <mat-error *ngIf="controls.description.hasError('required')">Champ obligatoire</mat-error>
            <mat-hint *ngIf="isRequired(controls.description)">required</mat-hint>
        </mat-form-field>

        <button type="submit" mat-raised-button color="primary" (click)="onSubmit()">Envoyer</button>
    </form>
</div>

```

