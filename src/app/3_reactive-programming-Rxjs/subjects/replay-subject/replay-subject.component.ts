import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {Demos} from '../../demos';


@Component({
    selector: 'app-replay-subject',
    templateUrl: './replay-subject.component.html',
    styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {

        const source = new ReplaySubject();
        source.next(1000);
        source.next(2000);
        //   source.subscribe(res => console.log('Result Subs 1:', res));
        source.next(4000);
        //   source.subscribe(res => console.log('Result Subs 2:', res));
        source.next(8000);
        //   source.subscribe(res => console.log('Result Subs 3:', res));


    }

}
