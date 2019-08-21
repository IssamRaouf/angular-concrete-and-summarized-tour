import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'hello',
        loadChildren: () => import('./1-components/1-content-projection/content-projection.module').then(mod => mod.ContentProjectionModule),
    },
    {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'hello',
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
