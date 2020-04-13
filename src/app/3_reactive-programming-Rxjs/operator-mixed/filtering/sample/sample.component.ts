import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {sample, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(10));
        const result = source.pipe(sample(interval(2000)));
        //   result.subscribe(res => console.log('Result :', res));
    }

}
