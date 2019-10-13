import {Component, OnInit} from '@angular/core';
import {of, concat} from 'rxjs';

@Component({
    selector: 'app-concat',
    templateUrl: './concat.component.html',
    styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const obser1 = of(11, 22, 'Issam');
        const obser2 = of(33, 77, 'Raouf');
        const obser3 = of(99, 88, 'Issam Raouf');
        // enlever le commentaire et voir résultat sur la console
        //const concatObsers = concat(obser1, obser2, obser3).subscribe(res => console.log('res concat', res));
    }

}
