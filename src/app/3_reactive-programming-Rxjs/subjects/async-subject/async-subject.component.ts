import {Component, OnInit} from '@angular/core';
import {AsyncSubject} from 'rxjs';
import {Demos} from '../../demos';

@Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
    styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        //       const source = new AsyncSubject();
        //  source.subscribe(res => console.log('Result subs 1', res));
        //   source.next(333);
        //   source.subscribe(res => console.log('Result subs 2', res));
        //     source.next(444);
        //  source.complete();
    }


}
