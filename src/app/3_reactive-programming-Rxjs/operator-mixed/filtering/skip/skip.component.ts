import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {skip, skipUntil, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-skip',
    templateUrl: './skip.component.html',
    styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(5));
        const result = source.pipe(skip(3));
        //    result.subscribe(result => console.log('Result : ', result));
    }

}
