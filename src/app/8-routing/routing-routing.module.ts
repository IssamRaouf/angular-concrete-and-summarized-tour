import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {DetailsTodoComponent} from './details-todo/details-todo.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DetailsTodoResolve} from './resolve/details-todo.resolve';
import {OnlyAdminGuard} from './guard/only-admin.guard';
import {DashboardGuard} from './guard/dashboard.guard';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivateChild: [DashboardGuard],
        children: [
            {
                path: '',
                redirectTo: 'todo-list',
                pathMatch: 'full'
            },
            {
                path: 'todo-list',
                component: TodoListComponent
            },
            {
                path: 'todo-form',
                component: TodoFormComponent
            },
            {
                path: 'todo-details/:id',
                component: DetailsTodoComponent,
                resolve: {detailsTodo: DetailsTodoResolve},
                canActivate: [OnlyAdminGuard]
            },
            {
                path: '**',
                component: NotFoundComponent
                // ou  redirectTo: 'todo-list', par exmp
            }
        ]
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingRoutingModule {

}
