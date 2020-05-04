import {Component, OnInit} from '@angular/core';
import {from, of, zip} from 'rxjs';
import {groupBy, map, mergeMap, toArray} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-group-by',
    templateUrl: './group-by.component.html',
    styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent implements OnInit {
    public demos = Demos;
    constructor() {
    }

    ngOnInit() {
        const persons = [
            {fullName: 'Issam Raouf', age: 26},
            {fullName: 'Soufiane Ramouda', age: 26},
            {fullName: 'Fouzi ben tounssi', age: 33},
            {fullName: 'khalil khalil', age: 33},
            {fullName: 'Mohamed Mohamed', age: 47}
        ];

        const source = from(persons);
        const result = source.pipe(
            groupBy(person => person.age, person => person.fullName),
            mergeMap(group => {
                return zip(
                    of(group.key), group.pipe(toArray())
                ).pipe(
                    map(([age, users]) => ({age, users}))
                );
            })
        );
      //  result.subscribe(res => console.log('Result ', res));
    }

}
