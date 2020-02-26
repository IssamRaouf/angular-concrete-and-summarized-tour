import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material';
import {CodeDetailsComponent} from '../code-details/code-details.component';
import {MarkdownModel} from './markdown.model';
import {MarkdownMap} from './markdown-map';

@Component({
    selector: 'app-markdown-docs',
    templateUrl: './markdown-docs.component.html',
    styleUrls: ['./markdown-docs.component.scss']
})

export class MarkdownDocsComponent implements OnInit {

    public srcMd: MarkdownModel;
    public readonly mapRouteMarkdowns = MarkdownMap.mapRouteMarkdowns;

    constructor(private router: Router, private matBottomSheet: MatBottomSheet) {

    }

    ngOnInit(): void {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.srcMd = this.mapRouteMarkdowns.get(event.url);
            });

    }

    public showCode(): void {
        console.log('srcMd', this.mapRouteMarkdowns);
        const config = new MatBottomSheetConfig();
        config.panelClass = 'code-details';
        config.data = this.srcMd;
        this.matBottomSheet.open(CodeDetailsComponent, config);
    }

    public onLoad(event) {
        console.log('onLoad', event);
    }

    public onError(event) {
        console.log('onError', event);
    }
}
