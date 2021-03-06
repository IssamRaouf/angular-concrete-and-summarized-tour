```html


<div class="container container-todo-form">

    <form [formGroup]="formTicket" class="form-container" novalidate>
        <mat-form-field>
            <input matInput placeholder="Le nom de ticket" formControlName="name">
            <mat-error *ngIf="formTicket.controls.name.invalid &&
            (formTicket.controls.name.dirty || formTicket.controls.name.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="formTicket.controls.name.errors &&
             formTicket.controls.name.errors.required">required
            </mat-hint>
        </mat-form-field>

        <mat-form-field>
            <mat-select placeholder="type de ticket" formControlName="type">
                <mat-option *ngFor="let option of typesAsSelect" [value]="option.val">{{option.text}}</mat-option>
            </mat-select>
            <mat-error *ngIf="formTicket.controls.type.invalid &&
            (formTicket.controls.type.dirty || formTicket.controls.type.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="formTicket.controls.type.errors &&
             formTicket.controls.type.errors.required">required
            </mat-hint>
        </mat-form-field>

        <mat-form-field>
            <textarea matInput placeholder="Description du ticket" formControlName="description"></textarea>
            <mat-error *ngIf="formTicket.controls.description.invalid &&
            (formTicket.controls.description.dirty || formTicket.controls.description.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="formTicket.controls.description.errors &&
             formTicket.controls.description.errors.required">required
            </mat-hint>
        </mat-form-field>

        <div formGroupName="author" class="form-container">
            <h3>Auteur</h3>
            <mat-form-field>
                <input matInput placeholder="First name" formControlName="firstName">
                <mat-error *ngIf="formTicket.get('author')['controls'].firstName.invalid &&
            (formTicket.get('author')['controls'].firstName.dirty || formTicket.get('author')['controls'].firstName.touched)">
                    <ng-container
                            *ngIf="formTicket.get('author')['controls'].firstName.errors && formTicket.get('author')['controls'].firstName.errors.required">
                        Champ
                        obligatoire
                    </ng-container>
                    <ng-container
                            *ngIf="formTicket.get('author')['controls'].firstName.errors && formTicket.get('author')['controls'].firstName.errors.minlength">
                        10 caractére
                        au minimum
                    </ng-container>
                </mat-error>
                <mat-hint *ngIf="formTicket.get('author')['controls'].firstName.errors &&
             formTicket.get('author')['controls'].firstName.errors.required">required
                </mat-hint>
            </mat-form-field>


            <mat-form-field>
                <input matInput placeholder="Last name" formControlName="lastName">
                <mat-error *ngIf="formTicket.get('author')['controls'].lastName.invalid &&
            (formTicket.get('author')['controls'].lastName.dirty || formTicket.get('author')['controls'].lastName.touched)">
                    Champ obligatoire
                </mat-error>
                <mat-hint *ngIf="formTicket.get('author')['controls'].lastName.errors &&
             formTicket.get('author')['controls'].lastName.errors.required">required
                </mat-hint>
            </mat-form-field>


            <mat-form-field>
                <input matInput placeholder="Email" formControlName="email">
                <mat-error *ngIf="formTicket.get('author')['controls'].email.invalid &&
            (formTicket.get('author')['controls'].email.dirty || formTicket.get('author')['controls'].email.touched)">
                    <ng-container
                            *ngIf="formTicket.get('author')['controls'].email.errors && formTicket.get('author')['controls'].email.errors.required">
                        Champ obligatoire
                    </ng-container>
                    <ng-container
                            *ngIf="formTicket.get('author')['controls'].email.errors && formTicket.get('author')['controls'].email.errors.pattern">
                        Email est invalide
                    </ng-container>
                </mat-error>
                <mat-hint *ngIf="formTicket.get('author')['controls'].email.errors &&
             formTicket.get('author')['controls'].email.errors.required">required
                </mat-hint>
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Grade" formControlName="grade">
                    <mat-option *ngFor="let option of gradeAsSelect" [value]="option.val">{{option.text}}</mat-option>
                </mat-select>
                <mat-error *ngIf="formTicket.get('author')['controls'].grade.invalid &&
            (formTicket.get('author')['controls'].grade.dirty || formTicket.get('author')['controls'].grade.touched)">
                    Champ obligatoire
                </mat-error>
                <mat-hint *ngIf="formTicket.get('author')['controls'].grade.errors &&
             formTicket.get('author')['controls'].grade.errors.required">required
                </mat-hint>
            </mat-form-field>
        </div>

        <button type="submit" mat-raised-button color="primary" (click)="onSubmit()">Envoyer</button>
    </form>
</div>
```
