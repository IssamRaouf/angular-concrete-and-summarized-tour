import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TicketComponent} from './ticket/ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {PipesCustomRoutingModule} from './pipes-custom-routing.module';
import {CurrencyToKMBPipe} from './pipes/currencyToKMB-pipe';
import {FilterTicketsPipes} from './pipes/filter-tickets-pipes';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, PipesCustomRoutingModule],
    declarations: [TodoComponent, TodoListComponent, TicketComponent, CurrencyToKMBPipe, FilterTicketsPipes]
})
export class PipesCustomModule {

}
