import {Component, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';
import {delayWhen, take} from 'rxjs/operators';

@Component({
    selector: 'app-delay-when',
    templateUrl: './delay-when.component.html',
    styleUrls: ['./delay-when.component.scss']
})
export class DelayWhenComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(5));
        const result = source.pipe(delayWhen(() => timer(5000)));
      //  result.subscribe(val => console.log(val));
    }

}
