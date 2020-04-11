import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {every} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-every',
    templateUrl: './every.component.html',
    styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const observ = of(4, 8, 9, 3);
        // observ.pipe(every(val => val % 2 === 0)).subscribe(res => console.log('Result : ', res));
    }

}
