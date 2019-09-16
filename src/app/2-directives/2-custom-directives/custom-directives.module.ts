import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TicketComponent} from './ticket/ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {CustomDirectivesRoutingModule} from './custom-directives-routing.module';
import {TicketInteractiveElementDirective} from './directives/ticket-Interactive-element.directive';
import {CaractereOnlyDirective} from './directives/caractere-only.directive';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, CustomDirectivesRoutingModule],
    declarations: [TodoComponent, TodoFormComponent, TodoListComponent, TicketComponent, TicketInteractiveElementDirective, CaractereOnlyDirective]
})
export class CustomDirectivesModule {

}
