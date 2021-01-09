```html


<div class="container container-todo-form">

    <form #formTicket="ngForm" (ngSubmit)="onSubmit()" class="form-container" novalidate>
        <mat-form-field>
            <input matInput placeholder="Le nom de ticket" name="name" [(ngModel)]="modelTicket.name" #name="ngModel"
                   required>
            <mat-error *ngIf="name.invalid && (name.dirty || name.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="name.errors && name.errors.required">required
            </mat-hint>
        </mat-form-field>

        <mat-form-field>
            <mat-select placeholder="type de ticket" name="type" [(ngModel)]="modelTicket.type" #type="ngModel"
                        required>
                <mat-option *ngFor="let option of typesAsSelect" [value]="option.val">{{option.text}}</mat-option>
            </mat-select>
            <mat-error *ngIf="type.invalid && (type.dirty || type.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="type.errors && type.errors.required">required
            </mat-hint>
        </mat-form-field>

        <mat-form-field>
            <textarea matInput placeholder="Description du ticket" name="description"
                      [(ngModel)]="modelTicket.description" #description="ngModel" required>
            </textarea>
            <mat-error *ngIf="description.invalid && (description.dirty || description.touched)">
                Champ obligatoire
            </mat-error>
            <mat-hint *ngIf="description.errors && description.errors.required">required
            </mat-hint>
        </mat-form-field>

        <div ngModelGroup="author" class="form-container">
            <h3>Auteur</h3>
            <mat-form-field>
                <input matInput placeholder="First name" name="firstName" [(ngModel)]="modelTicket.author.firstName"
                       #firstName="ngModel" required>
                <mat-error *ngIf="firstName.invalid &&  (firstName.dirty || firstName.touched)">
                    <ng-container *ngIf="firstName.errors && firstName.errors.required">Champ obligatoire</ng-container>
                    <ng-container *ngIf="firstName.errors && firstName.errors.minlength">
                        10 caractére au minimum
                    </ng-container>
                </mat-error>
                <mat-hint *ngIf="firstName.errors && firstName.errors.required">required</mat-hint>
            </mat-form-field>


            <mat-form-field>
                <input matInput placeholder="Last name" name="lastName" [(ngModel)]="modelTicket.author.lastName"
                       #lastName="ngModel" required>
                <mat-error *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)">
                    Champ obligatoire
                </mat-error>
                <mat-hint *ngIf="lastName.errors && lastName.errors.required">required</mat-hint>
            </mat-form-field>


            <mat-form-field>
                <input matInput placeholder="Email" name="email" [(ngModel)]="modelTicket.author.email"
                       #email="ngModel" required pattern="[^ @]*@[^ @]*">
                <mat-error *ngIf="email.invalid && (email.dirty || email.touched)">
                    <ng-container *ngIf="email.errors && email.errors.required">
                        Champ obligatoire
                    </ng-container>
                    <ng-container *ngIf="email.errors && email.errors.pattern">
                        Email est invalide
                    </ng-container>
                </mat-error>
                <mat-hint *ngIf="email.errors &&  email.errors.required">required</mat-hint>
            </mat-form-field>

            <mat-form-field>
                <mat-select placeholder="Grade" name="grade" [(ngModel)]="modelTicket.author.grade"
                            #grade="ngModel" required>
                    <mat-option *ngFor="let option of gradeAsSelect" [value]="option.val">{{option.text}}</mat-option>
                </mat-select>
                <mat-error *ngIf="grade.invalid && (grade.dirty || grade.touched)">
                    Champ obligatoire
                </mat-error>
                <mat-hint *ngIf="grade.errors && grade.errors.required">required</mat-hint>
            </mat-form-field>
        </div>

        <button type="submit" mat-raised-button color="primary">Envoyer</button>
    </form>
</div>

```
