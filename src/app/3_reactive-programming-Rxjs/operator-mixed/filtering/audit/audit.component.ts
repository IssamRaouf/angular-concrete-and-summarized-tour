import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {audit} from 'rxjs/operators';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
    resultIn: number;

    constructor() {
    }

    ngOnInit() {

        const source = fromEvent(document, 'click');
        const result = source.pipe(audit(ev => interval(3000)));
      /*  result.subscribe(element => {
            console.log(element);
        });*/
    }

}
