import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {TestbedAsyncComponent} from './testbed-async.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import 'zone.js/dist/zone-testing';
import {AppStateService} from '../services/app-state.service';

describe('TestbedAsyncComponent', () => {
    let component: TestbedAsyncComponent;
    let fixture: ComponentFixture<TestbedAsyncComponent>;
    let AppStateSer: AppStateService;
    // environment clear and init
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestbedAsyncComponent],
            providers: [AppStateService]
        });
        fixture = TestBed.createComponent(TestbedAsyncComponent);
        component = fixture.componentInstance;
        AppStateSer = TestBed.inject(AppStateService);
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

    it('Should display the add comment action for user has role Global admin (Jasmine done)', (done: DoneFn) => {

        const spy = spyOn(AppStateSer, 'userIsGlobalAdminPromise').and.returnValue(Promise.resolve(true));
        component.ngOnInit();

        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(component.canDisplayAddComment).toBeTruthy();
            done();
        });

    });

    it('Should display the add comment action for user has role Global admin (Async & whenStable)', async(() => {

        spyOn(AppStateSer, 'userIsGlobalAdminPromise').and.returnValue(Promise.resolve(true));
        component.ngOnInit();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.canDisplayAddComment).toBeTruthy();
        });

    }));

    it('Should display the add comment action for user has role Global admin (fakeAsync & tick)', fakeAsync(() => {
        spyOn(AppStateSer, 'userIsGlobalAdminPromise').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        tick();
        fixture.detectChanges();
        expect(component.canDisplayAddComment).toBeTruthy();

    }));
});
