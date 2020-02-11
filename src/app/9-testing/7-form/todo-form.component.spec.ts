import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoFormComponent} from './todo-form.component';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../MaterialModule';

xdescribe('TodoFormComponent', () => {
    let component: TodoFormComponent;
    let fixture: ComponentFixture<TodoFormComponent>;
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, MaterialModule],
            declarations: [TodoFormComponent]
        });
        fixture = TestBed.createComponent(TodoFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
