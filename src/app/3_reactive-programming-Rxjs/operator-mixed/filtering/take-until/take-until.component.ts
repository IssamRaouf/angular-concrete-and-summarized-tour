import {Component, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-take-until',
    templateUrl: './take-until.component.html',
    styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(takeUntil(timer(5000)));
      //  source.subscribe(res => console.log('Result : ', res));

    }

}
