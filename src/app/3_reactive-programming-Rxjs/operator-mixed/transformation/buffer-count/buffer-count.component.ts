import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {bufferCount, take} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-buffer-count',
    templateUrl: './buffer-count.component.html',
    styleUrls: ['./buffer-count.component.scss']
})
export class BufferCountComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = interval(1000).pipe(take(10));
        const result = source.pipe(bufferCount(2));
        //result.subscribe(res => console.log('Result : ', res));
    }

}
