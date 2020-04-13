import {Component, OnInit} from '@angular/core';
import {ConnectableObservable, interval} from 'rxjs';
import {map, publish, take, tap} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
    public demos = Demos;
    observ: ConnectableObservable<string>;

    constructor() {
    }

    ngOnInit() {

        const source = interval(1000).pipe(take(5));

        this.observ = source.pipe(
            // Les effets secondaires seront exécutés une fois meme au va l'abonner 100 fois...
            // Pour bien comprendre faire meme exmple sans publish et ConnectableObservable ,
            // à chaque subscribe il va declanche Augmentation le number de la vue..
            tap(() => console.log('Augmenter le number de vue d\'un ticket (Par exemple... )')),
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
