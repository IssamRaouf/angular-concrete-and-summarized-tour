import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {TestBedComponent} from './test-bed.component';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';
import {AppStateService} from '../services/app-state.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('TestBedComponent', () => {
    let component: TestBedComponent;
    let fixture: ComponentFixture<TestBedComponent>;
    let AppStateSer: AppStateService;
    let elStateDescriptionComment: DebugElement;

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
        AppStateSer = TestBed.inject(AppStateService);
        elStateDescriptionComment = fixture.debugElement.query(By.css('div.state-desc'));
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
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('', 'Hello world');
        expect(component.canDisplayAddComment).toBeTruthy();

    });
    it('Should display the add comment action for user has role Super admin', () => {
        spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('');
        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        fixture.detectChanges();
        expect(elStateDescriptionComment.nativeElement.textContent.trim()).toEqual('Cannot add comment..');
        expect(component.canDisplayAddComment).toBeFalsy();
    });

});

