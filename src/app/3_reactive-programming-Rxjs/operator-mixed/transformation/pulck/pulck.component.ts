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
            {name: 'issam raouf', age: 26}, {name: 'ZZZZZ ZZZZZ', age: 28},
            {name: 'XXXX XXXX', age: 36}, {name: 'YYYYY YYYYY', age: 22}
        ]);

        const result = source.pipe(pluck('name'));
       // result.subscribe(res => console.log('Result ', res));
    }

}
