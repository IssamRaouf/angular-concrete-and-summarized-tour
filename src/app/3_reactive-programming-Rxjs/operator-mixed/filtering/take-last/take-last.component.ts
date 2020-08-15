import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {takeLast} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-take-last',
    templateUrl: './take-last.component.html',
    styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        const source = of('Issam', 'Soufiane', 'Raouf', 'Ramouda');
        const result = source.pipe(takeLast(2));
        //  result.subscribe(res => console.log('Result : ', res));
    }

}
