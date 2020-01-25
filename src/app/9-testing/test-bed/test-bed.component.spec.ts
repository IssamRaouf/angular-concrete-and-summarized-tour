import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestBedComponent} from './test-bed.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';
import {AppStateService} from '../testing-with-mocks-spies/services/app-state.service';

describe('TestBedComponent', () => {
    let component: TestBedComponent;
    let fixture: ComponentFixture<TestBedComponent>;
    let AppStateSer: AppStateService;

    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestBedComponent],
            providers: [AppStateService]
        });
        fixture = TestBed.createComponent(TestBedComponent);
        component = fixture.componentInstance;
        AppStateSer = TestBed.get(AppStateService);
        fixture.detectChanges();
    });

    afterEach(() => {
        AppStateSer = null;
        component = null;
        fixture = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should display the add comment action for user has role Global admin', () => {
        spyOnProperty(AppStateSer, 'userIsGlobalAdmin').and.returnValue(true);
        expect(component.canDisplayAddComment).toBeTruthy();

    });
    it('Should display the add comment action for user has role Super admin', () => {
        spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        expect(component.canDisplayAddComment).toBeFalsy();
    });

});

