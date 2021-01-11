```javascript


import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, NgForm} from '@angular/forms';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {Ticket} from '../models/ticket.model';
import {GradeEnum} from '../enum/grade.enum';
import {Author} from '../models/author.model';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    public typesAsSelect: Array<object>;
    public gradeAsSelect: Array<object>;
    public modelTicket: Ticket;

    @ViewChild('formTicket', {static: true}) public formTicket: NgForm;

    @Output() public sendTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();


    constructor() {


    }

    ngOnInit() {
        this.initDomainModel();
        this.typesAsSelect = this.enumToSelectList(TicketTypeEnum);
        this.gradeAsSelect = this.enumToSelectList(GradeEnum);
    }

    public onSubmit(): void {
        this.markFormAsTouched(this.formTicket);
        if (this.formTicket.valid) {
            this.sendTicket.emit(new Ticket(this.modelTicket));
            this.initDomainModel();
            this.formTicket.resetForm();
        }
    }


    /**
     * Enum to select objs
     * @param definition
     * @return Array<object>
     */
    private enumToSelectList(definition): Array<object> {
        return Object.keys(definition).map(key => ({val: definition[key], text: definition[key]}));
    }

    /**
     * Marks all controls in a form group as touched
     */
    public markFormAsTouched(formGroup: FormGroup | FormArray | NgForm): void {
        (Object as any).values(formGroup.controls).forEach(control => {
            if (control.controls) {
                this.markFormAsTouched(control);
            } else {
                control.markAsTouched();
            }
        });
    }

    public initDomainModel(): void {
        this.modelTicket = new Ticket({
            name: null,
            description: null,
            type: null,
            author: new Author({
                firstName: null,
                lastName: null,
                email: null,
                grade: null,
            })
        });
    }
}


```
