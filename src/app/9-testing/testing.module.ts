import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestingRoutingModule} from './testing-routing.module';
import {CurrencyToKMBPipe} from './1-simple-class-pipe/pipes/currreny-to-kmb.pipe';
import { WithRealServiceComponent } from './2-testing-with-mocks-spies/with-real-service/with-real-service.component';
import {AppStateService} from './services/app-state.service';
import { WithMocksServiceComponent } from './2-testing-with-mocks-spies/with-mocks-service/with-mocks-service.component';
import { WithSpiesComponent } from './2-testing-with-mocks-spies/with-spies/with-spies.component';
import { TestBedComponent } from './3-test-bed/test-bed.component';
import { TestbedAsyncComponent } from './4-testbed-async/testbed-async.component';


@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, TestingRoutingModule],
    declarations: [DashboardComponent, CurrencyToKMBPipe, WithRealServiceComponent, WithMocksServiceComponent, WithSpiesComponent, TestBedComponent, TestbedAsyncComponent],
    providers: [AppStateService]
})

export class TestingModule {

}
