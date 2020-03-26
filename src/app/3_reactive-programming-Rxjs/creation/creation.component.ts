import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {from, of, fromEvent, interval, Observable, timer, range} from 'rxjs';

@Component({
    selector: 'app-creation',
    templateUrl: './creation.component.html',
    styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

    public observableOfResult: string;
    public observableFromResult = '';
    public observableFromEventResult = 'No';
    public observableIntervalResult = 0;
    public observableCreateResult = '';
    public observableTimerResult = 0;
    public observableRangeResult;

    public demoNewObs = `
    // Implementation
        const obsCreate = new Observable((observer) => {
             observer.next('Hello');
             observer.next(' from');
             observer.next(' Observable creation');
             observer.complete();
        }); 
    // Subscribre
        obsCreate.subscribe((res) => {
         this.observableCreateResult += res;
        });`;

    @ViewChild('btnFromEvent', {static: true}) btnFEvent: ElementRef;

    constructor() {
    }


    ngOnInit() {
        // 1)
        const obsCreate = new Observable((observer) => {
            observer.next('Hello');
            observer.next(' from');
            observer.next(' Observable creation');
            observer.complete();
        });
        obsCreate.subscribe((res) => {
            this.observableCreateResult += res;
        });

        // 2) of
        const observableOf = of('Hello form obervable of');
        observableOf.subscribe((res) => {
            this.observableOfResult = res;
        });


        // 3) form
        const observableFrom = from(['Symfony and', 'Angular', 'these', 'are', 'my', 'loves']);
        observableFrom.subscribe(res => {
            this.observableFromResult += ` ${res}`;
        });

        // 4) fromEvent
        const obsFromEvent = fromEvent(this.btnFEvent.nativeElement, 'click');
        obsFromEvent.subscribe((isClicked) => {
            this.observableFromEventResult = 'Yes';
        });

        // 5) interval
        const obsInterval = interval(2000);
        obsInterval.subscribe((res) => {
            this.observableIntervalResult = res;
        });

        // 6) timer
        const obsTimer = timer(1000, 5000);
        obsTimer.subscribe(res => this.observableTimerResult += res);

        // 7) Range
        const obsRange = range(11, 33);
        obsRange.subscribe(res => this.observableRangeResult = res);

    }

}
