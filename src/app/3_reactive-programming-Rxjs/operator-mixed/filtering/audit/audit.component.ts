import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {audit} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = fromEvent(document, 'click');
        const result = source.pipe(audit(ev => interval(3000)));
        // enlever le commentaire et voir résultat sur la console
        /*  result.subscribe(element => {
              console.log(element);
          });*/
    }

}
