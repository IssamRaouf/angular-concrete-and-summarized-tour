import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
    selector: 'app-code-details',
    templateUrl: './code-details.component.html',
    styleUrls: ['./code-details.component.scss']
})
export class CodeDetailsComponent implements OnInit {

    constructor(private _bottomSheetRef: MatBottomSheetRef<CodeDetailsComponent>) {
    }

    ngOnInit(): void {
    }

}
