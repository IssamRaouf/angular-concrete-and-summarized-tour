import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Demos} from '../../demos';

@Component({
    selector: 'app-behavior-subject',
    templateUrl: './behavior-subject.component.html',
    styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        //      const source = new BehaviorSubject(123);
        //  source.subscribe(res => console.log('Result subs 1:', res));
        // source.subscribe(res => console.log('Result subs 2:', res));
        // source.next(333);
    }

}
