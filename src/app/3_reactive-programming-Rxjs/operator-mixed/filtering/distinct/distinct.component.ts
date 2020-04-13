import {Component, OnInit} from '@angular/core';
import {from} from 'rxjs';
import {distinct} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-distinct',
    templateUrl: './distinct.component.html',
    styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent implements OnInit {
    public demos = Demos;
    constructor() {
    }

    ngOnInit() {
        /*
        simple exemple
            source = of(1,5,3,4,5,2,3);
             const result = source.pipe(distinct());
             // OUTPUT 1 , 5 , 3, 4 , 2

        */

        const arrObjects = [{id: 12, note: 20}, {id: 13, note: 33}, {id: 12, note: 20}];

        const source = from(arrObjects).pipe(distinct(item => item.id));

      // source.subscribe(result => console.log('Result : ', result));

    }

}
