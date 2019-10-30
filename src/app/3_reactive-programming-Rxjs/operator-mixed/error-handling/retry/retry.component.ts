import {Component, OnInit} from '@angular/core';
import {throwError, of, interval} from 'rxjs';
import {retry, switchMap, take} from 'rxjs/operators';

@Component({
    selector: 'app-retry',
    templateUrl: './retry.component.html',
    styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        const observ = interval(1000).pipe(take(10));
        let checkIn = false;
        const observIn = observ.pipe(
            switchMap(val => {
                if (val > 4 && checkIn === false) {
                    checkIn = true;
                    return throwError('Error!');
                }
                return of(val);
            }),
            retry(1)
        );

     /*   observIn.subscribe({
            next: val => console.log(val),
            error: val => console.log(`${val}: Retried 2 times then quit!`)
        });*/

    }

}
