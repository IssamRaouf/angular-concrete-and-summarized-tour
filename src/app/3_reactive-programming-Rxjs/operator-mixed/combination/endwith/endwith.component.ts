import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {endWith} from 'rxjs/operators';

@Component({
    selector: 'app-endwith',
    templateUrl: './endwith.component.html',
    styleUrls: ['./endwith.component.scss']
})
export class EndwithComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const obser = of('Issam', 'Raouf','Hello');
        // enlever le commentaire et voir résultat sur la console
        // obser.pipe(endWith('Goodbye')).subscribe( res => console.log('res endWith', res));
    }

}
