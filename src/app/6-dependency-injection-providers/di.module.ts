import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../MaterialModule';
import {DIRoutingModule} from './di.routing.module';




@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, DIRoutingModule],
    declarations: [TodoComponent]
})
export class DIModule {

}
