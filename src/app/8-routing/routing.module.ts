import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../MaterialModule';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoutingRoutingModule} from './routing-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, HttpClientModule, RoutingRoutingModule],
    declarations: [DashboardComponent]
})

export class RoutingModule {

}
