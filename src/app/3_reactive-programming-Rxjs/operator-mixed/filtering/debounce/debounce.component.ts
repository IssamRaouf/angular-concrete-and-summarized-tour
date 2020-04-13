import {Component, OnInit} from '@angular/core';
import {fromEvent, timer} from 'rxjs';
import {debounce} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-debounce',
    templateUrl: './debounce.component.html',
    styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = fromEvent(document, 'click');
        const result = source.pipe(debounce(() => timer(1000)));
        // result.subscribe(element => console.log('element :', element));
    }

}
