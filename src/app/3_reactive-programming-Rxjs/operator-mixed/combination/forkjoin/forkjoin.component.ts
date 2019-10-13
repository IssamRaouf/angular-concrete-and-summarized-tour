import {Component, OnInit} from '@angular/core';
import {forkJoin, of} from 'rxjs';

@Component({
    selector: 'app-forkjoin',
    templateUrl: './forkjoin.component.html',
    styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const obser1 = of('Issam', 'Raouf', 'Hello');
        const obser2 = of('99', '1000', '2000');
        const obser3 = of({name: 'issam raouf', job: 'Lead developer'},
            {name: 'khalil boukhari', job: 'full stack developer'},
            {name: 'Fouzi ben tounssi', job: 'Architect technique'});
        forkJoin([obser1, obser2, obser3]).subscribe(res => console.log('ForkJoin res is ', res));

    }

}
