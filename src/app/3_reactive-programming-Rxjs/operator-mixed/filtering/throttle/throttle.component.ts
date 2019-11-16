import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take, throttle} from 'rxjs/operators';

@Component({
    selector: 'app-throttle',
    templateUrl: './throttle.component.html',
    styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(10));
        const result = source.pipe(throttle((val) => interval(2000)));
        //result.subscribe(res => console.log('Result :', res));
    }

}
