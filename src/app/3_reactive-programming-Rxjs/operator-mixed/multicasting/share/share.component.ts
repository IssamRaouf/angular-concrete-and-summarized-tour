import {Component, OnInit} from '@angular/core';
// RxJS v6+
import {timer} from 'rxjs';
import {tap, mapTo, share} from 'rxjs/operators';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {


        const source = timer(1000);
        const observ = source.pipe(
            tap(() => console.log('RAITEMENT UNE SEULE FOIS, MÊME S\'IL Y A MULTI SUBSCRIBE (Partage source..)')),
            mapTo('Result : Hello ')
        );
        const sharedObserv = observ.pipe(share());

      //  const subscribeOne = sharedObserv.subscribe(val => console.log('subscribeOne ', val));
       // const subscribeTow = sharedObserv.subscribe(val => console.log('subscribeTow ', val));

    }

}
