import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {from, of, fromEvent, interval, Observable} from 'rxjs';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    public observableOfResult: string;
    public observableFromResult = '';
    public observableFromEventResult = 'No';
    public observableIntervalResult = 0;
    public observableCreateResult = '';

    @ViewChild('btnFromEvent', {static: true}) btnFEvent: ElementRef;

    constructor() {

    }

    ngOnInit() {
        // 1) Create
        const obsCreate = new Observable((observer) => {
            observer.next('Hello');
            observer.next('from');
            observer.next('Observable creation');
            observer.complete();
        });
        obsCreate.subscribe((res) => {
            this.observableCreateResult += ` ${res}`;
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

        const obsInterval = interval(2000);
        obsInterval.subscribe((res) => {
            this.observableIntervalResult = res;
        });


    }

}
