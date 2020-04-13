import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {skipWhile, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-skip-while',
    templateUrl: './skip-while.component.html',
    styleUrls: ['./skip-while.component.scss']
})
export class SkipWhileComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        const source = interval(1000).pipe(take(10));
        const result = source.pipe(skipWhile(item => item < 7));
        //   result.subscribe(res => console.log('Result : ', res));

    }

}
