import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TicketComponent } from './ticket/ticket.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../MaterialModule';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, ContentProjectionRoutingModule, MarkdownModule.forChild()],
    declarations: [TodoComponent, TodoFormComponent, TodoListComponent, TicketComponent]
})
export class ContentProjectionModule {

}
