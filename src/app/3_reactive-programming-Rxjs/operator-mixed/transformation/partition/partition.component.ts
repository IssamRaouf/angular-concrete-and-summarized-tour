import {Component, OnInit} from '@angular/core';
import {of, merge} from 'rxjs';
import {map, partition} from 'rxjs/operators';

@Component({
    selector: 'app-partition',
    templateUrl: './partition.component.html',
    styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
   //     const [even, odd] = source.pipe(partition(val => val % 2 === 0));
    //    const result = merge(even.pipe(map(val => `${val} is even`)), odd.pipe(map(val => `${val} is odd`)));
       // result.subscribe(res => console.log('Result :', res));
    }

}
