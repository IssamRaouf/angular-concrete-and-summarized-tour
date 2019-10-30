import {Component, OnInit} from '@angular/core';
import {ConnectableObservable, interval} from 'rxjs';
import {map, publish, take, tap} from 'rxjs/operators';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
    observ: ConnectableObservable<string>;

    constructor() {
    }

    ngOnInit() {

        const source = interval(1000).pipe(take(5));
        this.observ = source.pipe(
            tap(() => console.log('Side Effect #1')),
            map(val => `Result : ${val}`),
            publish()
        ) as ConnectableObservable<string>;

        const subscribeOne = this.observ.subscribe(val =>
            console.log(`subscribeOne , ${val}`)
        );
        const subscribeTwo = this.observ.subscribe(val =>
            console.log(`subscribeTwo , ${val}`)
        );

    }

    public connect(): void {
        this.observ.connect();
    }

}
