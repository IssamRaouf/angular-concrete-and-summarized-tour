import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {TicketTypeEnum} from '../enum/ticket-type.enum';
import {Ticket} from '../models/ticket.model';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    public formTicket: FormGroup;
    public typesAsSelect: Array<object>;
    @Output() public sendTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();


    constructor() {
        this.formTicket = new FormGroup({
            name: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
        this.typesAsSelect = this.enumToSelectList(TicketTypeEnum);
    }

    ngOnInit() {
    }

    public onSubmit(): void {
        this.formTicket.markAsTouched();
        if (this.formTicket.valid) {
            console.log('formTicket', this.formTicket);
            this.sendTicket.emit(new Ticket(this.formTicket.value));
        }
    }

    /**
     * we can use  Template's sugar syntax  but ,i use the simple for better understand the chapter
     *  Template's sugar syntax
     * @param formControl
     * @return boolean
     */
    public isRequired(formControl: FormControl): boolean {
        return formControl.errors && formControl.errors.required !== undefined;
    }

    /**
     * we can use  Template's sugar syntax  but ,i use the simple for better understand the chapter
     *  Template's sugar syntax
     * @param formControl
     * @return  {{[p: string]: AbstractControl}}
     */
    public get controls(): { [key: string]: FormControl } {
        return this.formTicket.controls ? this.formTicket.controls as { [key: string]: FormControl } : null;
    }

    /**
     * Enum to select objs
     * @param definition
     * @return Array<object>
     */
    private enumToSelectList(definition): Array<object> {
        return Object.keys(definition).map(key => ({val: definition[key], text: definition[key]}));
    }


}
