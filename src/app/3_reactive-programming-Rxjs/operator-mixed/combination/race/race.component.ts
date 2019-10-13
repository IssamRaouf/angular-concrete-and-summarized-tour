import {Component, OnInit} from '@angular/core';
import {interval, race} from 'rxjs';
import {mapTo,take} from 'rxjs/operators';

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const obser1 = interval(2000).pipe(take(3), mapTo('First , emet chaque 2 seconde'));
        const obser2 = interval(1000).pipe(take(3), mapTo('First , emet chaque 1 seconde'));
        const obser3 = interval(3000).pipe(take(3), mapTo('First , emet chaque 3 seconde'));
        // observ2 qui va ganger a chaque fois
        // enlever le commentaire et voir résultat sur la console
    //   race(obser1, obser2, obser3).subscribe(res => console.log('race result is ', res));
    }

}
