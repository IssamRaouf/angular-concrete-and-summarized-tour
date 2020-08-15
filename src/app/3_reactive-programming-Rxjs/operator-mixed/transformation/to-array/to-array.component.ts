import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-to-array',
    templateUrl: './to-array.component.html',
    styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = of(2, 4, 6, 8, 10);
        const result = source.pipe(toArray());
        // result.subscribe(res => console.log('Result :', res));
    }

}
