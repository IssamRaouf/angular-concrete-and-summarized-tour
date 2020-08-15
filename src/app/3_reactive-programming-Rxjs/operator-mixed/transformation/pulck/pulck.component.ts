import {Component, OnInit} from '@angular/core';
import {from} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-pulck',
    templateUrl: './pulck.component.html',
    styleUrls: ['./pulck.component.scss']
})
export class PulckComponent implements OnInit {
    public demos = Demos;
    constructor() {
    }

    ngOnInit() {
        const source = from([
            {name: 'issam raouf', age: 26}, {name: 'Ramouda Soufiane', age: 28},
            {name: 'Fouzi ben tounssi', age: 36}, {name: 'Khalil khalil', age: 22}
        ]);

        const result = source.pipe(pluck('name'));
       // result.subscribe(res => console.log('Result ', res));
    }

}
