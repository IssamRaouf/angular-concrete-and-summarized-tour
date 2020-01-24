import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestingRoutingModule} from './testing-routing.module';
import {CurrencyToKMBPipe} from './simple-class-pipe/pipes/currreny-to-kmb.pipe';
import { WithRealServiceComponent } from './testing-with-mocks-spies/with-real-service/with-real-service.component';
import {AppStateService} from './testing-with-mocks-spies/services/app-state.service';
import { WithMocksServiceComponent } from './testing-with-mocks-spies/with-mocks-service/with-mocks-service.component';
import { WithSpiesComponent } from './testing-with-mocks-spies/with-spies/with-spies.component';
import { TestBedComponent } from './test-bed/test-bed.component';


@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, TestingRoutingModule],
    declarations: [DashboardComponent, CurrencyToKMBPipe, WithRealServiceComponent, WithMocksServiceComponent, WithSpiesComponent, TestBedComponent],
    providers: [AppStateService]
})

export class TestingModule {

}
