import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {defaultIfEmpty} from 'rxjs/operators';

@Component({
    selector: 'app-defaultifempty',
    templateUrl: './defaultifempty.component.html',
    styleUrls: ['./defaultifempty.component.scss']
})
export class DefaultifemptyComponent implements OnInit {

    constructor() {


    }

    ngOnInit() {
        const observ = of().pipe(defaultIfEmpty('hello world'));
       // observ.subscribe(res => console.log('Result is :', res));
    }

}
