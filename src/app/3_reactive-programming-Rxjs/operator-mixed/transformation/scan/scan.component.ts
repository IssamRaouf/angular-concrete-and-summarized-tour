import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {scan} from 'rxjs/operators';
import {Demos} from '../../../demos';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
    public demos = Demos;

    constructor() {
    }

    ngOnInit() {
        const source = of(3, 7, 9);
        const result = source.pipe(scan((accu, curVal) => accu + curVal, 0));
        //result.subscribe(res => console.log('Result :', res));
    }

}
