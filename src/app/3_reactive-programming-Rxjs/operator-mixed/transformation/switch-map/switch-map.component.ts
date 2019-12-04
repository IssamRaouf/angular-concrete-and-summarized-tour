import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-switch-map',
    templateUrl: './switch-map.component.html',
    styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(26, 44, 66);
        const result = source.pipe(switchMap(age => of({age})));
     //  result.subscribe(res => console.log('Result :', res));
    }

}
