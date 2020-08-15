import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = of(1, 2, 3, 4);
        const result = source.pipe(map(val => val * 10));
        //     result.subscribe(res => console.log('Result ', res));
    }

}
