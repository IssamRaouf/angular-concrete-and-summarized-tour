import {HoverButtonDirective} from './hover-button.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';
import {ComponentComponent} from '../5-component/component.component';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

@Component({
    template: '<p>TestDirective!</p><br> <button appHoverButton> Login </button>'
})
class TestComponent {

}

describe('HoverButtonDirective', () => {


    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let submitEl: DebugElement;

    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, HoverButtonDirective]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        submitEl = fixture.debugElement.query(By.css('button'));
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should create an instance', () => {
        const directive = new HoverButtonDirective();
        expect(directive).toBeTruthy();
    });

    it('hovering over submit button', () => {
        submitEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(submitEl.nativeElement.style.backgroundColor).toBe('red');

        submitEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(submitEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});
