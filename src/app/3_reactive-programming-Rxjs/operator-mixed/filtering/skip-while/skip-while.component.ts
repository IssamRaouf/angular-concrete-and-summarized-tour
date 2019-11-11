import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {skipWhile, take} from 'rxjs/operators';

@Component({
    selector: 'app-skip-while',
    templateUrl: './skip-while.component.html',
    styleUrls: ['./skip-while.component.scss']
})
export class SkipWhileComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const source = interval(1000).pipe(take(10));
        const result = source.pipe(skipWhile(item => item < 8));
     //   result.subscribe(res => console.log('Result : ', res));

    }

}
