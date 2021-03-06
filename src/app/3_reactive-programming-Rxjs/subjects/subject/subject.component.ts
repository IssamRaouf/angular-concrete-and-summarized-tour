import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Demos} from '../../demos';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const sub = new Subject();
        sub.next(1);
        //  sub.subscribe(res => console.log('Result sub 1;', res));
        sub.next(2);
        //   sub.subscribe(res => console.log('Result sub 2:', res));
        sub.next(3);

    }


}
