import {Component, OnInit} from '@angular/core';
import {from, of} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-distinct-until-changed',
    templateUrl: './distinct-until-changed.component.html',
    styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        /*
        const source = of(1, 2, 2, 3, 4, 4, 4, 6, 2, 1, 4);
        const result = source.pipe(distinctUntilChanged());
            // OUTPUT
            1,2,3,4,6,2,1,4
         */
        const source = from([{id: 13, note: 20, name: 'Issam'}, {id: 13, note: 20, name: 'Issam'}, {id: 13, note: 20, name: 'Soufiane'},
            {id: 13, note: 20, name: 'Issam'}, {id: 13, note: 20, name: 'Raouf'}]);
        const result = source.pipe(distinctUntilChanged((perv, curr) => perv.name === curr.name));
        //   result.subscribe(result => console.log('Result : ', result));

    }

}
