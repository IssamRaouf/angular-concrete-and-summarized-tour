import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ticket} from '../models/ticket.model';
import {UserModel} from '../models/user.model';
import {TodoRestService} from '../services/todo-rest.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
    public formTicket: FormGroup;
    public typesAsSelect: Array<object>;
    @Output() public sendTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();
    @Input() usersList: Array<UserModel> = [];
    @Input() editTicket: Ticket;
    public isAdd: boolean = true;

    constructor(private todoRestServ: TodoRestService) {

    }

    ngOnInit() {

    }

    public ngOnChanges(): void {
        if (!this.editTicket) {
            this.isAdd = true;
            this.editTicket = new Ticket({title: null, userId: null, completed: false});
        } else {
            this.isAdd = false;
        }
        this.createAndInitForm();
    }

    public createAndInitForm(): void {
        this.formTicket = new FormGroup({
            userId: new FormControl(this.editTicket.userId, Validators.required),
            title: new FormControl(this.editTicket.title, Validators.required),
            completed: new FormControl(this.editTicket.completed),
        });
    }

    public onSubmit(): void {
        this.markFormAsTouched(this.formTicket);
        if (this.formTicket.valid) {
            const todo = new Ticket(this.formTicket.value);

            if (this.isAdd) {
                this.todoRestServ.addTodo(todo).subscribe((newTicket: Ticket) => {
                    if (newTicket) {
                        todo.id = newTicket.id;
                        this.sendTicket.emit(todo);
                    }
                });
            } else {

            }
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
