import {Component, OnInit} from '@angular/core';
import {merge, of} from 'rxjs';
import {delay, mapTo} from 'rxjs/operators';

@Component({
    selector: 'app-delay',
    templateUrl: './delay.component.html',
    styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(1);
        const result = merge(
            source.pipe(mapTo('Hello'), delay(100)),
            source.pipe(mapTo(' World'), delay(200)),
            source.pipe(mapTo(' Goodbye'), delay(300)),
            source.pipe(mapTo(' World'), delay(400)),
        );
        result.subscribe(res => console.log('Result', res));


    }

}
