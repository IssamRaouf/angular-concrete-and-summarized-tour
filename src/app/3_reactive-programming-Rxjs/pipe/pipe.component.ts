import {Component, OnInit} from '@angular/core';
import {Demos} from '../demos';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

    public readonly demos = Demos;

    constructor() {
    }

    ngOnInit() {
    }

}
