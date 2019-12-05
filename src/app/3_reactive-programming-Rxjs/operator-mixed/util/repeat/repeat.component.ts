import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {repeat} from 'rxjs/operators';

@Component({
    selector: 'app-repeat',
    templateUrl: './repeat.component.html',
    styleUrls: ['./repeat.component.scss']
})
export class RepeatComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = of('Issam', 'Raouf');
        const result = source.pipe(repeat(2));
      //  result.subscribe(res => console.log('Result :', res));
    }

}
