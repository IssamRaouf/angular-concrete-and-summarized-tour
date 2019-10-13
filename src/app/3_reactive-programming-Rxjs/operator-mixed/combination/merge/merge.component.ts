import {Component, OnInit} from '@angular/core';
import {interval, merge} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
    selector: 'app-merge',
    templateUrl: './merge.component.html',
    styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // emit valeur chaque 1 s
        const interval1 = interval(1000).pipe(take(3), map(val => `interval First ${val}`));
        // emit valeur chaque 2 s
        const interval2 = interval(2000).pipe(take(3), map(val => `interval tow ${val}`));
        // emit valeur chaque 3 s
        const interval3 = interval(3000).pipe(take(3), map(val => `interval theree ${val}`));
        // enlever le commentaire et voir résultat sur la console
       // merge(interval1, interval2, interval3).subscribe(result => console.log('merge result is ', result));

    }

}
