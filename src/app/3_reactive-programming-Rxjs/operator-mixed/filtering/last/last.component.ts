import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {first, last} from 'rxjs/operators';

@Component({
    selector: 'app-last',
    templateUrl: './last.component.html',
    styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const source = of(1, 2, 3, 4, 5, 6);
        const result = source.pipe(last(num => num % 2 === 0));

     //   result.subscribe(res => console.log('Result : ', res));
    }


}
