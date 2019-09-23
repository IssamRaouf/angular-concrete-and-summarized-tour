import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RpRxjsRoutingModule} from './rp-rxjs-routing.module';
import {MaterialModule} from '../MaterialModule';
import {CreationComponent} from './creation/creation.component';
import {PipeComponent} from './pipe/pipe.component';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent, CreationComponent, PipeComponent]
})
export class RpRxjsModule {

}
