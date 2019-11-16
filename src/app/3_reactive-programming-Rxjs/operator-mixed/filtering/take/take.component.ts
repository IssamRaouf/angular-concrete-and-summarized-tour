import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-take',
    templateUrl: './take.component.html',
    styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(2));
      //  source.subscribe(res => console.log('Result :', res));

    }


}
