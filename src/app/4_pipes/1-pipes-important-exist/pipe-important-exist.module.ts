import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {PipeImportantExistRoutingModule} from './pipe-important-exist.routing.module';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, PipeImportantExistRoutingModule],
    declarations: [TodoComponent]
})
export class PipeImportantExistModule {

}
