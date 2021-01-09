import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotesGeneralComponent} from './notes-general/notes-general.component';

// si mieux de stocker les route name sur un const pour qu'on puisse jouer et change comme on veut
// on va voir ca sur le projet suivant vrai list todo :D
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
        loadChildren: () => import('./3_reactive-programming-Rxjs/rp-rxjs.module').then(mod => mod.RpRxjsModule)
    },
    {
        path: 'pipes-important-exist',
        loadChildren: () => import('./4_pipes/1-pipes-important-exist/pipe-important-exist.module')
            .then(mod => mod.PipeImportantExistModule)
    },
    {
        path: 'pipes-custom',
        loadChildren: () => import('./4_pipes/2-pipes-custom/pipes-custom.module').then(mod => mod.PipesCustomModule)
    },
    {
        path: 'reactive-forms',
        loadChildren: () => import('./5-forms/1-reactive-form/reactive-form.module').then(mod => mod.ReactiveFormModule)
    },
    {
        path: 'template-driven-form',
        loadChildren: () => import('./5-forms/2-template-driven-form/template-driven-form.module').then(mod => mod.TemplateDrivenFormModule)
    },
    {
        path: 'dependency-injection',
        loadChildren: () => import('./6-dependency-injection-providers/di.module').then(mod => mod.DIModule)
    },
    {
        path: 'http-module',
        loadChildren: () => import('./7-http/http-example.module').then(mod => mod.HttpExampleModule)
    },
    {
        path: 'routing',
        loadChildren: () => import('./8-routing/routing.module').then(mod => mod.RoutingModule)
    },
    {
        path: 'testing',
        loadChildren: () => import('./9-testing/testing.module').then(mod => mod.TestingModule)
    },
    {
        path: 'notes-general',
        component: NotesGeneralComponent
    },
    {
        path: '',
        redirectTo: 'notes-general',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
