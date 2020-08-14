````javascript
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
    public isAdd: boolean;

    @Input() usersList: Array<UserModel> = [];
    @Input() editTicket: Ticket;

    @Output() public sendTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();
    @Output() public sendEditedTicket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

    constructor(private todoRestServ: TodoRestService) {
    }

    ngOnInit() {

    }

    /**
     * Ecouter les changement de données s'il
     * le editTicket est vide c'est l'ajout sinon c'est la modification
     * edit ticket , envoyer a partir de todo-component (input)
     * puis creér et initailiser la form avec l'object editTicket
     */
    public ngOnChanges(): void {
        if (!this.editTicket) {
            this.isAdd = true;
            this.editTicket = new Ticket({id: null, title: null, userId: null, completed: false});

        } else {
            this.isAdd = false;
        }
        this.createAndInitForm();
    }

    /**
     * creation et initialisation de form avec l'object editTicket
     */
    public createAndInitForm(): void {
        this.formTicket = new FormGroup({
            userId: new FormControl(this.editTicket.userId, Validators.required),
            title: new FormControl(this.editTicket.title, Validators.required),
            completed: new FormControl(this.editTicket.completed),
            id: new FormControl(this.editTicket.id),
        });
    }

    /**
     * titre de l'operation courant
     */
    public get titleOperation(): string {
        return this.isAdd ? 'Ajouter ticket' : 'Modifier Ticket';
    }

    /**
     *  submission de données (edit & add)
     */
    public onSubmit(): void {
        this.markFormAsTouched(this.formTicket);
        if (this.formTicket.valid) {
            const todo = new Ticket(this.formTicket.value);

            (this.isAdd ? this.addTodo(todo) : this.editTodo(todo));
        }
    }

    /**
     * clean and init form
     */
    public onClean(): void {
        this.isAdd = true;
        this.editTicket = Object.assign(new Ticket({id: null, title: null, userId: null, completed: false}));
        this.createAndInitForm();
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

    /**
     * traitement de l'ajout , appele au service todoRestService la mathode addTodo
     * aprés l'ajout a passé avec succes envoyer le todo item à todo-component pour
     * l'inserer dans la liste via (output sendTicket)
     * @param todo
     */
    private addTodo(todo: Ticket): void {
        this.todoRestServ.addTodo(todo).subscribe((newTicket: Ticket) => {
            if (newTicket) {
                todo.id = newTicket.id;
                this.sendTicket.emit(todo);
            }
        });
    }

    /**
     * traitement de la modification , appel au service todoRestService la mathode addTodo
     * aprés la modification a passé avec succes envoyer le todo item à todo-component pour
     * la mise a jour de la liste via (output sendEditedTicket)
     * @param todo
     */
    private editTodo(todo: Ticket): void {
        this.todoRestServ.putTodo(todo).subscribe((newTicket: Ticket) => {
            if (newTicket) {
                todo.id = newTicket.id;
                this.sendEditedTicket.emit(todo);
            }
        });
    }


    /**
     * Enum to select objs
     * @param definition
     * @return Array<object>
     */
    private enumToSelectList(definition): Array<object> {
        return Object.keys(definition).map(key => ({val: definition[key], text: definition[key]}));
    }


}``
```

