import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestBedComponent} from './test-bed.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

describe('TestBedComponent', () => {
    let component: TestBedComponent;
    let fixture: ComponentFixture<TestBedComponent>;

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestBedComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestBedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
