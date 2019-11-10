import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {distinctUntilKeyChanged} from 'rxjs/operators';

@Component({
    selector: 'app-distinct-until-key-changed',
    templateUrl: './distinct-until-key-changed.component.html',
    styleUrls: ['./distinct-until-key-changed.component.scss']
})
export class DistinctUntilKeyChangedComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const source = of({age: 4, name: 'Foo'}, {age: 7, name: 'Bar'}, {age: 5, name: 'Foo'}, {age: 6, name: 'Foo'});
        const result = source.pipe(distinctUntilKeyChanged('name'));
       // result.subscribe(res => console.log('Result : ', res));
        /*
        exemple 2
                const source = of({age: 4, name: 'Foo1'}, {age: 7, name: 'Bar'}, {age: 5, name: 'Foo2'}, {age: 6, name: 'Foo3'});

               const result = source.pipe(distinctUntilKeyChanged('name',
                   (namePerv: string, nameCurr: string) => namePerv.substring(0, 3) === nameCurr.substring(0, 3)));
               result.subscribe(res => console.log('Result : ', res));

         */
    }

}
