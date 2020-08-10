import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentComponent} from './component.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import 'zone.js/dist/zone-testing';
import {UserModel} from '../models/user.model';

describe('ComponentComponent', () => {
    let component: ComponentComponent;
    let fixture: ComponentFixture<ComponentComponent>;
    let usernameEl: DebugElement;
    let passwordEl: DebugElement;
    let submitEl: DebugElement;
    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentComponent]
        });
        fixture = TestBed.createComponent(ComponentComponent);
        component = fixture.componentInstance;

        usernameEl = fixture.debugElement.query(By.css('input[type=email]'));
        passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
        submitEl = fixture.debugElement.query(By.css('button'));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    //    On peut tester les Inputs en définissant simplement des valeurs sur les propriétés d'entrée d'un composant.
    it('should Button send be disabled if input enabled has false', () => {
        component.enabled = false;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeFalsy();
    });
    // On peut tester les Outputs en souscrivant à un observable EventEmitters et en stockant les valeurs émises sur des variables locales.
    it('should output return object userModel.. click on login ', () => {

        let userModel: UserModel;
        usernameEl.nativeElement.value = 'iraouf.soft@gmail.com';
        passwordEl.nativeElement.value = 'P@ss?@';

        component.loggedIn.subscribe((val) => userModel = val);
        submitEl.triggerEventHandler('click', null);

        expect(userModel.username).toBe('iraouf.soft@gmail.com');
        expect(userModel.password).toBe('P@ss?@');
    });
});

