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
        path: 'directives-important-exist',
        loadChildren: () => import('./2-directives/1-directives-important-exist/directives-important-exist.module')
            .then(mod => mod.DirectivesImportantExistModule)
    },

    {
        path: 'directives-custom',
        loadChildren: () => import('./2-directives/2-custom-directives/custom-directives.module').then(mod => mod.CustomDirectivesModule)
    },
    {
        path: 'reactive-programming',
        loadChildren: () => import('./3_reactive-programming-Rxjs/creation/rp-rxjs.module').then(mod => mod.RpRxjsModule)
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
