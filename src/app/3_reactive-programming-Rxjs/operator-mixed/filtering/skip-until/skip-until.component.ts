import {Component, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';
import {skipUntil, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-skip-until',
    templateUrl: './skip-until.component.html',
    styleUrls: ['./skip-until.component.scss']
})
export class SkipUntilComponent implements OnInit {
    public demos = Demos;
    constructor() {
    }

    ngOnInit() {

        const source = interval(1000).pipe(take(10));
        const result = source.pipe(skipUntil(timer(6000)));
     //   result.subscribe(res => console.log('Result : ', res));
    }

}
