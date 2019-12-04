import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {concatMap, delay} from 'rxjs/operators';

@Component({
    selector: 'app-concat-map',
    templateUrl: './concat-map.component.html',
    styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(2000, 4000, 6000);
        const result = source.pipe(concatMap(val => of(`Delay of : ${val}`).pipe(delay(val))));
       // result.subscribe(res => console.log('Result', res));
    }

}
