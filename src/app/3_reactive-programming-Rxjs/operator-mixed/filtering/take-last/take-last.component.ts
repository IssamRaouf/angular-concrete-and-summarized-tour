import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {takeLast} from 'rxjs/operators';

@Component({
    selector: 'app-take-last',
    templateUrl: './take-last.component.html',
    styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const source = of('Issam', 'Soufiane', 'Raouf', 'Ramouda');
        const result = source.pipe(takeLast(2));
        //  result.subscribe(res => console.log('Result : ', res));
    }

}
