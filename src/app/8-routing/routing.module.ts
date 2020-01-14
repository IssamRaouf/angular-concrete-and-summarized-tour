import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../MaterialModule';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoutingRoutingModule} from './routing-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { DetailsTodoComponent } from './details-todo/details-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, HttpClientModule, RoutingRoutingModule],
    declarations: [DashboardComponent, TodoListComponent, TodoFormComponent, DetailsTodoComponent, NotFoundComponent]
})

export class RoutingModule {
}
