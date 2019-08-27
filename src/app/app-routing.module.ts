import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: 'content-projection',
        loadChildren: () => import('./1-components/1-content-projection/content-projection.module').then(mod => mod.ContentProjectionModule)
    },
    {
        path: 'lifecycle-hooks',
        loadChildren: () => import('./1-components/2-lifecycle-hooks/lifecycle-hooks.module').then(mod => mod.LifecycleHooksModule)
    },
    {
        path: 'view-content-child-children',
        loadChildren: () => import('./1-components/3-view_children-content_children/view-content-child-children.module')
            .then(mod => mod.ViewContentChildChildrenModule)
    },
    {
        path: '',
        redirectTo: 'content-projection',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
