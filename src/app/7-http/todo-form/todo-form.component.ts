import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';
import {TodoRestService} from '../services/todo-rest.service';
import {tick} from '@angular/core/testing';

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

    constructor(private todoRestServ: TodoRestService) {
        this.formTicket = new FormGroup({
            userId: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            completed: new FormControl(false),
        });
    }

    ngOnInit() {
    }

    public onSubmit(): void {
        this.markFormAsTouched(this.formTicket);
        if (this.formTicket.valid) {
            const todo = new Ticket(this.formTicket.value);
            this.todoRestServ.addTodo(todo).subscribe((newTicket: Ticket) => {

                if (newTicket) {
                    todo.id = newTicket.id;
                    this.sendTicket.emit(todo);
                } else {
                    // on va faire les notifications avec le component de material design snackbar aprés..
                    alert('Error , see console');
                }
            });

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
