import {Component, OnInit} from '@angular/core';
import {interval, zip} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-zip',
    templateUrl: './zip.component.html',
    styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const obser1 = interval(1000).pipe(map(val => `obser1 : ${val}`), take(3));
        const obser2 = interval(2000).pipe(map(val => `obser2 : ${val}`), take(3));
        const obser3 = interval(3000).pipe(map(val => `obser3 : ${val}`), take(3));
        const obser4 = interval(6000).pipe(map(val => `obser4 : ${val}`), take(3));
        // enlever le commentaire et voir résultat sur la console
        //  zip(obser1, obser2, obser3, obser4).subscribe(res => console.log('Result : ', res));
    }

}
