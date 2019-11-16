import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take, throttle, throttleTime} from 'rxjs/operators';

@Component({
    selector: 'app-throttle-time',
    templateUrl: './throttle-time.component.html',
    styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(10));
        const result = source.pipe(throttleTime(2000));
     //   result.subscribe(res => console.log('Result :', res));

    }

}
