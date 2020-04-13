import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-debounce-time',
    templateUrl: './debounce-time.component.html',
    styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const clicks = fromEvent(document, 'click');
        const result = clicks.pipe(debounceTime(1000));
        // result.subscribe(x => console.log(x));

    }

}
