import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-markdown-docs',
    templateUrl: './markdown-docs.component.html',
    styleUrls: ['./markdown-docs.component.scss']
})
export class MarkdownDocsComponent implements OnInit {

    public srcMd: string;

    //['', '/assets/md/app/5-forms/form.md'],

    mapRouteMd: Map<string, string> = new Map<string, string>([
        ['/lifecycle-hooks', '/assets/md/app/1-components/2-lifecycle-hooks/note.md'],
        ['/content-projection', '/assets/md/app/1-components/1-content-projection/note.md'],
        ['/view-content-child-children', '/assets/md/app/1-components/3-view_children-content_children/note.md'],
        ['/http-module', '/assets/md/app/7-http/note.md'],
        ['/template-driven-form', '/assets/md/app/5-forms/2-template-driven-form/note.md'],
        ['/reactive-forms', '/assets/md/app/5-forms/1-reactive-form/note.md'],
        ['/directives-custom', '/assets/md/app/2-directives/2-custom-directives/note.md'],
        ['/directives-important-exist', '/assets/md/app/2-directives/1-directives-important-exist/note.md'],
        ['/pipes-custom', '/assets/md/app/4_pipes/2-pipes-custom/note.md'],
        ['/pipes-important-exist', '/assets/md/app/4_pipes/1-pipes-important-exist/note.md'],
        ['/routing', '/assets/md/app/8-routing/note.md'],
        ['/testing', '/assets/md/app/9-testing/note.md'],
        ['/reactive-programming', '/assets/md/app/3_reactive-programming-Rxjs/note.md'],
        ['/dependency-injection', '/assets/md/app/6-dependency-injection-providers/note.md'],
    ]);


    constructor(private router: Router) {

    }

    ngOnInit(): void {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.srcMd = this.mapRouteMd.get(event.url);
            });

    }

    public onLoad(event) {
        console.log('onLoad', event);
    }

    public onError(event) {
        console.log('onError', event);
    }
}
