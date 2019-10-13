import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {pairwise} from 'rxjs/operators';

@Component({
    selector: 'app-pairwise',
    templateUrl: './pairwise.component.html',
    styleUrls: ['./pairwise.component.scss']
})
export class PairwiseComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const observ = of({name: 'issam raouf', job: 'Lead developer'},
            {name: 'khalil boukhari', job: 'full stack developer'},
            {name: 'Fouzi ben tounssi', job: 'Architect technique'}
        ).pipe(
            pairwise()
        );
        observ.subscribe(res => console.log('pairwise res is ', res));
    }

}
