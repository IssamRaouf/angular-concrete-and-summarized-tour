import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {RoutingTestComponent} from './routing-test.component';
import {Component} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import 'zone.js/dist/zone-testing';

@Component({
    template: `List todos`
})
export class ListTodosComponent {
}

@Component({
    template: `Todo details`
})
export class TodoDetailsComponent {
}

export const routes: Routes = [
    {path: '', redirectTo: 'list-todos', pathMatch: 'full'},
    {path: 'list-todos', component: ListTodosComponent},
    {path: 'todo-details', component: TodoDetailsComponent}
];

describe('RoutingTestComponent', () => {

    let fixture: ComponentFixture<RoutingTestComponent>;
    let location: Location;
    let router: Router;
    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });
    beforeEach(() => {
        TestBed.configureTestingModule({
            // on peut tester le routage dans Angular en utilisant RouterTestingModule au lieu de RouterModule .
            // ce module configure le routeur à utiliser pour les tests.
            // Il fournit des implémentations d'espionnage (spy) de `Location`,` LocationStrategy`
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [RoutingTestComponent, ListTodosComponent, TodoDetailsComponent]
        });

        fixture = TestBed.createComponent(RoutingTestComponent);
        router = TestBed.get(Router); // get router service
        location = TestBed.get(Location); // get location service
        router.initialNavigation(); //Ceci configure l'écouteur de changement d'emplacement et effectue la navigation initiale.
    });
    // Le router est une activité asynchrone, nous utilisons donc l'une des méthodes de test asynchrones (done de jasmine)
    it('should redirect to list todos when navigate to empty url', (done: DoneFn) => {
        router.navigate(['']).then(() => {
            expect(location.path()).toBe('/list-todos');
            done();
        });
    });
    it('should redirect to list todos when navigate to list-todos url', (done: DoneFn) => {
        router.navigate(['list-todos']).then(() => {
            expect(location.path()).toBe('/list-todos');
            done();
        });
    });
    it('should redirect to details todo when navigate to todo-details', (done: DoneFn) => {
        router.navigate(['todo-details']).then(() => {
            expect(location.path()).toBe('/todo-details');
            done();
        });
    });

});
