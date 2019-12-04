import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';

@Component({
    selector: 'app-to-array',
    templateUrl: './to-array.component.html',
    styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(2, 4, 6, 8, 10);
        const result = source.pipe(toArray());
        result.subscribe(res => console.log('Result :', res));
    }

}
