import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        const source = of(1, 2, 3, 4, 5, 6);
        const result = source.pipe(filter(num => num % 2 === 0));

        // result.subscribe(res => console.log('Result : ', res));


    }

}
