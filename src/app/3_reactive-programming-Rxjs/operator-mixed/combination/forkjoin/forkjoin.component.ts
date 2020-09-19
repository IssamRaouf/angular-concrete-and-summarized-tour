import {Component, OnInit} from '@angular/core';
import {forkJoin, of} from 'rxjs';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-forkjoin',
    templateUrl: './forkjoin.component.html',
    styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const obser1 = of('Hello');
        const obser2 = of('2017', '2008', '2004');
        const obser3 = of({name: 'issam raouf', job: 'Lead developer'},
            {name: 'YYYYY YYYYY', job: 'full stack developer'},
            {name: 'XXXXX XXXXX', job: 'Architect technique'});
        // enlever le commentaire et voir résultat sur la console
        // forkJoin([obser1, obser2, obser3]).subscribe(res => console.log('ForkJoin res is ', res));

    }

}
