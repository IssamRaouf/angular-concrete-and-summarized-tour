````javascript
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {DetailsTodoComponent} from './details-todo/details-todo.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DetailsTodoResolve} from './details-todo.resolve';
import {OnlyAdminGuard} from './only-admin.guard';
import {DashboardGuard} from './dashboard.guard';
import {FormTodoGuard} from './form-todo.guard';


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
                component: TodoFormComponent,
                canDeactivate: [FormTodoGuard]
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
````
