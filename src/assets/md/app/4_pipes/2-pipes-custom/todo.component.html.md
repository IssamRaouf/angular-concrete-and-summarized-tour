```html
<div class="container container-todo">
    <div class="row">
        <mat-form-field>
            <mat-label>by Field</mat-label>
            <mat-select [formControl]="byField">

                <mat-option *ngFor="let type of fields" [value]="type">
                    {{type}}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-form-field>
            <input matInput
                   placeholder="Search by {{(byField.valueChanges | async) ?(byField.valueChanges | async) : 'name'}}"
                   [formControl]="likeTerm">
        </mat-form-field>
    </div>


    <app-todo-list
            [ticketList]="ticketListMook | appfilterTickets:(byField.valueChanges | async):(likeTerm.valueChanges|async)">
    </app-todo-list>
</div>


```
