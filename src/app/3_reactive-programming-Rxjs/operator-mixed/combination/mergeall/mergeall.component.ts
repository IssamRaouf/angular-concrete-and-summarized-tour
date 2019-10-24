import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';

@Component({
    selector: 'app-mergeall',
    templateUrl: './mergeall.component.html',
    styleUrls: ['./mergeall.component.scss']
})
export class MergeallComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const obserTr = val => of(val).pipe(map(val => val * 3));
        const obser = of(1, 2, 3, 4);
        // enlever le commentaire et voir résultat sur la console
     /*   obser.pipe(
            map(val => obserTr(val)),
            mergeAll()
        ).subscribe(res => console.log('result: ', res));*/

    }

}
