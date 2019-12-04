import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
    selector: 'app-map-to',
    templateUrl: './map-to.component.html',
    styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = fromEvent(document, 'click');
        const result = source.pipe(mapTo('click In'));
       // result.subscribe(res => console.log('Result ', res));

    }

}
