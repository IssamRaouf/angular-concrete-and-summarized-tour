import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {RpRxjsRoutingModule} from './rp-rxjs-routing.module';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RpRxjsRoutingModule],
    declarations: [TodoComponent]
})
export class RpRxjsModule {

}
