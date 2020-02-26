import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {MarkdownModel} from '../markdown-docs/markdown.model';

@Component({
    selector: 'app-code-details',
    templateUrl: './code-details.component.html',
    styleUrls: ['./code-details.component.scss']
})
export class CodeDetailsComponent implements OnInit {

    markdownList: Map<string, string>;

    constructor(private _bottomSheetRef: MatBottomSheetRef<CodeDetailsComponent>,
                @Inject(MAT_BOTTOM_SHEET_DATA) public data: MarkdownModel) {
        this.markdownList = this.data.mapExamplesCode;
    }


    ngOnInit(): void {

    }

}
