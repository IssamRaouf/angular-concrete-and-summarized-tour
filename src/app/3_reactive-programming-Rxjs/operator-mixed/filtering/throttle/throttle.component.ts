import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take, throttle} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-throttle',
    templateUrl: './throttle.component.html',
    styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(10));
        const result = source.pipe(throttle((val) => interval(2000)));
        //result.subscribe(res => console.log('Result :', res));
    }

}
