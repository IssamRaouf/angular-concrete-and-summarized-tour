import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Array<Route> = [
    {
        path: '',
        component: DashboardComponent

    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class TestingRoutingModule {

}
