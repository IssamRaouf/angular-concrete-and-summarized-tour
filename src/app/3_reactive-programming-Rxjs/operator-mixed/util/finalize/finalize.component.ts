import {Component, OnInit} from '@angular/core';
import {interval, of} from 'rxjs';
import {finalize, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-finalize',
    templateUrl: './finalize.component.html',
    styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        const source = interval(1000);
        const result = source.pipe(take(5),
            finalize(() => console.log('Sequence complete'))
        );
        result.subscribe(res => console.log('Result', res));
    }

}
