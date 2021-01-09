import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import {TodoFormComponent} from './todo-form.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import 'zone.js/dist/zone-testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ticket} from '../models/ticket.model';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent;
    let fixture: ComponentFixture<TodoFormComponent>;
    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            // On import les modules nécessaires dont il a besoin notre component pour marche .. parce qu'on est entrain de test one file
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                MaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [TodoFormComponent]
        });
        fixture = TestBed.createComponent(TodoFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should form is invalid when she is empty ', () => {
        expect(component.formTicket.valid).toBeFalsy();
    });
    it('name field validity ', () => {
        let errors;
        const nameControl = component.formTicket.get('name');
        // check required when empty
        errors = nameControl.errors || {};
        expect(errors['required']).toBeTruthy();

        // check reuired when not empty
        nameControl.setValue('check');
        errors = nameControl.errors || {};
        expect(errors['required']).toBeFalsy();

    });
    it('type field validity ', () => {
        let errors;
        const typeControl = component.formTicket.get('type');
        // check required when empty
        errors = typeControl.errors || {};
        expect(errors['required']).toBeTruthy();

        // check required when not empty
        typeControl.setValue(component.typesAsSelect[0]);
        errors = typeControl.errors || {};
        expect(errors['required']).toBeFalsy();
    });
    it('description field validity ', () => {
        let errors;
        const descriptionControl = component.formTicket.get('description');
        // check required when empty
        errors = descriptionControl.errors || {};
        expect(errors['required']).toBeTruthy();

        // check required when not empty
        descriptionControl.setValue('ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ');
        errors = descriptionControl.errors || {};
        expect(errors['required']).toBeFalsy();
    });
    it('should output return object ticket when submit form valid', () => {
        let ticket: Ticket;
        component.formTicket.get('name').setValue('check');
        component.formTicket.get('type').setValue('type');
        component.formTicket.get('description').setValue('check desc');

        component.sendTicket.subscribe((ticketIn) => ticket = ticketIn);

        expect(component.formTicket.valid).toBeTruthy();

        component.onSubmit();

        expect(ticket.name).toBe('check');
        expect(ticket.type).toBe('type');
        expect(ticket.description).toBe('check desc');


    });
});

