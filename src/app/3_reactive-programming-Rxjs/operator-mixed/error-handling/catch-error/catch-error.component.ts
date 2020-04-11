import {Component, OnInit} from '@angular/core';
import {throwError, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Demos} from '../../../demos';


@Component({
    selector: 'app-catch-error',
    templateUrl: './catch-error.component.html',
    styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const errorTh = throwError('ERROR 404!');
        const obser = errorTh.pipe(catchError(error => of(`Error, ${error}`)));
        // obser.subscribe( res => console.log('Result : ', res));
    }

}
