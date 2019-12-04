import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {reduce} from 'rxjs/operators';

@Component({
    selector: 'app-reduce',
    templateUrl: './reduce.component.html',
    styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(3, 7, 9);
        const result = source.pipe(reduce((accu, curVal) => accu + curVal, 0));
     //   result.subscribe(res => console.log('Result :', res));
    }

}
