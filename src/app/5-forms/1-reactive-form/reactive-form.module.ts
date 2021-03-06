import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TicketComponent} from './ticket/ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {ReactiveFormRoutingModule} from './reactive-form-routing.module';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, ReactiveFormRoutingModule],
    declarations: [TodoComponent, TodoFormComponent, TodoListComponent, TicketComponent]
})
export class ReactiveFormModule {

}
