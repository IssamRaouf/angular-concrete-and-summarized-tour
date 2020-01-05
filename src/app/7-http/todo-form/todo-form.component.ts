import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    public formTicket: FormGroup;
    public typesAsSelect: Array<object>;
    @Output() public sendTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

    @Input() usersList: Array<UserModel> = [];

    constructor() {
        this.formTicket = new FormGroup({
            userId: new FormControl('', Validators.required),
            id: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            completed: new FormControl(false),
        });
    }

    ngOnInit() {
    }

    public onSubmit(): void {
        this.markFormAsTouched(this.formTicket);
        if (this.formTicket.valid) {
            console.log('formTicket', this.formTicket);
            this.sendTicket.emit(new Ticket(this.formTicket.value));
        }
    }

    /**
     *  Template's sugar syntax
     * @param formControl
     * @return boolean
     */
    public isRequired(formControl: FormControl): boolean {
        return formControl.errors && formControl.errors.required !== undefined;
    }

    /**
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

    /**
     * Marks all controls in a form group as touched
     */
    public markFormAsTouched(formGroup: FormGroup | FormArray): void {
        (Object as any).values(formGroup.controls).forEach(control => {
            if (control.controls) {
                control.controls.forEach(cs => this.markFormAsTouched(cs));
            } else {
                control.markAsTouched();
            }
        });
    }


}
