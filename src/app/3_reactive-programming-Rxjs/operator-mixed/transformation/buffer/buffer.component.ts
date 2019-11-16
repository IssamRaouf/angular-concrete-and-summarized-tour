import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {buffer} from 'rxjs/operators';

@Component({
    selector: 'app-buffer',
    templateUrl: './buffer.component.html',
    styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const fermetureNotifier = fromEvent(document, 'click');
        const source = interval(1000);
        const result = source.pipe(buffer(fermetureNotifier));
        result.subscribe(res => console.log('Result :', res));


    }

}
