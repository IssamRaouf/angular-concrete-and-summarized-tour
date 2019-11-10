import {Component, OnInit} from '@angular/core';
import {of, timer} from 'rxjs';
import {debounce} from 'rxjs/operators';

@Component({
    selector: 'app-debounce',
    templateUrl: './debounce.component.html',
    styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const source = of('HELLO', 'WORLD', 'GOODBYE', 'WORLD');
        const result = source.pipe(debounce(() => timer(1000)));
      //  result.subscribe(res => console.log('RESULT :', res));

    }

}
