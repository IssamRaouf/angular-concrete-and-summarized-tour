import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {takeWhile} from 'rxjs/operators';

@Component({
    selector: 'app-take-while',
    templateUrl: './take-while.component.html',
    styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(1, 2, 3, 4, 5, 6);
        const result = source.pipe(takeWhile(val => val < 5));
       // result.subscribe(res => console.log('Result', res));
    }

}
