import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {pairwise} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-pairwise',
    templateUrl: './pairwise.component.html',
    styleUrls: ['./pairwise.component.scss']
})
export class PairwiseComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const observ = of({name: 'issam raouf', job: 'Lead developer'},
            {name: 'khalil boukhari', job: 'full stack developer'},
            {name: 'Fouzi ben tounssi', job: 'Architect technique'}
        ).pipe(
            pairwise()
        );
        //  enlever le commentaire et voir résultat sur la console
         // observ.subscribe(res => console.log('pairwise res is ', res));
    }

}
