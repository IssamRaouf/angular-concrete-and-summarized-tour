import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'app-tap',
    templateUrl: './tap.component.html',
    styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(1, 2, 3);
        const result = source.pipe(
            tap(val => console.log(`Element before map ${val}`)),
            map(val => val * 10),
            tap(val => console.log(`Element after map ${val}`))
        );
      //  result.subscribe(res => console.log('Result', res));
    }

}
