import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../MaterialModule';
import {HttpExampleRoutingModule} from './http-example-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {TodoRestService} from './services/todo-rest.service';
import {TicketComponent} from './ticket/ticket.component';
import {TodoListComponent} from './todo-list/todo-list.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, HttpClientModule, ReactiveFormsModule, HttpExampleRoutingModule],
    declarations: [TodoComponent, TicketComponent, TodoListComponent],
    providers: [TodoRestService]
})
export class HttpExampleModule {

}
