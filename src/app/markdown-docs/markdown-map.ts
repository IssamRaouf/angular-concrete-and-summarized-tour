import {MarkdownModel} from './markdown.model';

// si mieux de stocker les routes name sur un const pour qu'on puisse jouer et change comme on veut..
// on va voir ca sur le projet suivant vrai list todo :D

export class MarkdownMap {
    public static readonly mapRouteMarkdowns: Map<string, MarkdownModel> = new Map<string, MarkdownModel>([
        ['/content-projection',
            new MarkdownModel({
                noteGeneralFile: '/assets/md/app/1-components/1-content-projection/note.md',
                moduleDir: 'src/app/1-components/1-content-projection',
                mapExamplesCode: new Map<string, string>([
                    ['1. todo-form.component.html', '/assets/md/app/1-components/1-content-projection/todo-form.component.html.md'],
                    ['2. todo-list.component.html', '/assets/md/app/1-components/1-content-projection/todo-list.component.html.md'],
                    ['3. todo.component.html', '/assets/md/app/1-components/1-content-projection/todo.component.html.md'],
                    ['4. todo.component.ts', '/assets/md/app/1-components/1-content-projection/todo.component.ts.md'],

                ])
            })
        ],

        ['/lifecycle-hooks', new MarkdownModel({noteGeneralFile: '/assets/md/app/1-components/2-lifecycle-hooks/note.md'})],
        ['/directives-custom', new MarkdownModel({noteGeneralFile: '/assets/md/app/2-directives/2-custom-directives/note.md'})],
        ['/directives-important-exist', new MarkdownModel({noteGeneralFile: '/assets/md/app/2-directives/1-directives-important-exist/note.md'})],
        ['/view-content-child-children', new MarkdownModel({noteGeneralFile: '/assets/md/app/1-components/3-view_children-content_children/note.md'})],
        ['/reactive-programming', new MarkdownModel({noteGeneralFile: '/assets/md/app/3_reactive-programming-Rxjs/note.md'})],
        ['/pipes-custom', new MarkdownModel({noteGeneralFile: '/assets/md/app/4_pipes/2-pipes-custom/note.md'})],
        ['/pipes-important-exist', new MarkdownModel({noteGeneralFile: '/assets/md/app/4_pipes/1-pipes-important-exist/note.md'})],
        ['/template-driven-form', new MarkdownModel({noteGeneralFile: '/assets/md/app/5-forms/2-template-driven-form/note.md'})],
        ['/reactive-forms', new MarkdownModel({noteGeneralFile: '/assets/md/app/5-forms/1-reactive-form/note.md'})],
        ['/dependency-injection', new MarkdownModel({noteGeneralFile: '/assets/md/app/6-dependency-injection-providers/note.md'})],
        ['/http-module', new MarkdownModel({noteGeneralFile: '/assets/md/app/7-http/note.md'})],
        ['/routing', new MarkdownModel({noteGeneralFile: '/assets/md/app/8-routing/note.md'})],
        ['/testing', new MarkdownModel({noteGeneralFile: '/assets/md/app/9-testing/note.md'})],
    ]);

}
