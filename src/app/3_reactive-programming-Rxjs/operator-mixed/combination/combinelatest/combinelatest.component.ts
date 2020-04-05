import {Component, OnInit} from '@angular/core';
import {combineLatest, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-combinelatest',
    templateUrl: './combinelatest.component.html',
    styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements OnInit {
    public readonly demos = Demos;

    constructor() {
    }

    ngOnInit() {
        // combinerLatest
        const Observable1 = timer(1000, 1000).pipe(take(3), map(res => `Observable One Val: ${res}`));
        const Observable2 = timer(1000, 3000).pipe(take(5), map(res => `Observable Tow Val: ${res}`));
        // enlever le commentaire et voir résultat sur la console
        //  combineLatest(Observable1, Observable2).subscribe(result => console.log('res combineLatest', result));
    }

}
