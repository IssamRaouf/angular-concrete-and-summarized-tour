import {Component, OnInit} from '@angular/core';
import {from, fromEvent} from 'rxjs';
import {auditTime} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-audit-timer',
    templateUrl: './audit-timer.component.html',
    styleUrls: ['./audit-timer.component.scss']
})
export class AuditTimerComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = fromEvent(document, 'click');
        const result = source.pipe(auditTime(1000));
        //  result.subscribe(res => console.log('Result : ', res));
    }

}
