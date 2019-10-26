import {Component, OnInit} from '@angular/core';
import {from, of} from 'rxjs';
import {switchMap, sequenceEqual} from 'rxjs/operators';

@Component({
    selector: 'app-sequence-equal',
    templateUrl: './sequence-equal.component.html',
    styleUrls: ['./sequence-equal.component.scss']
})
export class SequenceEqualComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const observ = from([99, 33, 44]);
        of([1, 2, 3], [4, 5, 6], [99, 33, 44]).pipe(
            switchMap(arr => from(arr).pipe(sequenceEqual(observ)))
        ).subscribe(res => console.log('Result : ', res));
    }

}
