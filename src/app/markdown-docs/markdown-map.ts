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
        ['/lifecycle-hooks',
            new MarkdownModel({
                noteGeneralFile: '/assets/md/app/1-components/2-lifecycle-hooks/note.md',
                moduleDir: 'src/app/1-components/2-lifecycle-hooks',
                mapExamplesCode: new Map<string, string>([
                    ['1. todo-list.component.html', '/assets/md/app/1-components/2-lifecycle-hooks/todo-list.component.html.md'],
                    ['2. todo-list.component.ts', '/assets/md/app/1-components/2-lifecycle-hooks/todo-list.component.ts.md'],
                ])
            })
        ],
        ['/view-content-child-children',
            new MarkdownModel({
                noteGeneralFile: '/assets/md/app/1-components/3-view_children-content_children/note.md',
                moduleDir: 'src/app/1-components/3-view_children-content_children',
                mapExamplesCode: new Map<string, string>([
                    ['1. todo.component.html', '/assets/md/app/1-components/3-view_children-content_children/todo.component.html.md'],
                    ['2. todo.component.ts', '/assets/md/app/1-components/3-view_children-content_children/todo.component.ts.md'],
                    ['3. todo-list.component.html', '/assets/md/app/1-components/3-view_children-content_children/todo-list.component.html.md'],
                    ['4. todo-list.component.ts', '/assets/md/app/1-components/3-view_children-content_children/todo-list.component.ts.md'],
                ])
            })
        ],

        ['/directives-important-exist',
            new MarkdownModel({
                noteGeneralFile: '/assets/md/app/2-directives/1-directives-important-exist/note.md',
                moduleDir: 'src/app/2-directives/1-directives-important-exist',
                mapExamplesCode: new Map<string, string>([
                    ['1. todo-list.component.html', '/assets/md/app/2-directives/1-directives-important-exist/todo-list.component.html.md'],
                ])
            })
        ],
        ['/directives-custom',
            new MarkdownModel({
                noteGeneralFile: '/assets/md/app/2-directives/2-custom-directives/note.md',
                moduleDir: 'src/app/2-directives/2-custom-directives',
                mapExamplesCode: new Map<string, string>([
                    ['1. todo-form.component.html', '/assets/md/app/2-directives/2-custom-directives/todo-form.component.html.md'],
                    ['2. caractere-only.directive.ts', '/assets/md/app/2-directives/2-custom-directives/caractere-only.directive.ts.md'],
                    ['3. ticket.component.html', '/assets/md/app/2-directives/2-custom-directives/ticket.component.html.md'],
                    ['4. ticket-Interactive-element.directive.ts', '/assets/md/app/2-directives/2-custom-directives/ticket-Interactive-element.directive.ts.md'],
                ])
            })
        ],

        ['/reactive-programming', new MarkdownModel({noteGeneralFile: '/assets/md/app/3_reactive-programming-Rxjs/note.md'})],

        ['/pipes-important-exist', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/4_pipes/1-pipes-important-exist/note.md',
            moduleDir: 'src/app/4_pipes/1-pipes-important-exist',
            mapExamplesCode: new Map<string, string>([
                ['1. todo.component.html', '/assets/md/app/4_pipes/1-pipes-important-exist/todo.component.html.md'],
            ])
        })],


        ['/pipes-custom', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/4_pipes/1-pipes-important-exist/note.md',
            moduleDir: 'src/app/4_pipes/2-pipes-custom',
            mapExamplesCode: new Map<string, string>([
                ['1. todo.component.html', '/assets/md/app/4_pipes/2-pipes-custom/todo.component.html.md'],
                ['2. filter-tickets-pipes.ts', '/assets/md/app/4_pipes/2-pipes-custom/filter-tickets-pipes.ts.md'],
                ['3. ticket.component.html', '/assets/md/app/4_pipes/2-pipes-custom/ticket.component.html.md'],
                ['4. currencyToKMB-pipe.ts', '/assets/md/app/4_pipes/2-pipes-custom/currencyToKMB-pipe.ts.md'],
            ])
        })],


        ['/template-driven-form', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/5-forms/2-template-driven-form/note.md',
            moduleDir: 'src/app/5-forms/2-template-driven-form',
            mapExamplesCode: new Map<string, string>([
                ['1. todo-form.component.html', '/assets/md/app/5-forms/2-template-driven-form/todo-form.component.html.md'],
                ['2. todo-form.component.ts', '/assets/md/app/5-forms/2-template-driven-form/todo-form.component.ts.md'],

            ])
        })],
        ['/reactive-forms', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/5-forms/1-reactive-form/note.md',
            moduleDir: 'src/app/5-forms/1-reactive-form',
            mapExamplesCode: new Map<string, string>([
                ['1. todo-form.component.html', '/assets/md/app/5-forms/1-reactive-form/todo-form.component.html.md'],
                ['2. todo-form.component.ts', '/assets/md/app/5-forms/1-reactive-form/todo-form.component.ts.md'],

            ])
        })],


        ['/dependency-injection', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/6-dependency-injection-providers/note.md',
            expandedNoteGeneral: true
        })],

        ['/http-module', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/7-http/note.md',
            moduleDir: 'src/app/7-http',
            mapExamplesCode: new Map<string, string>([
                ['1. todo-rest.service.ts', '/assets/md/app/7-http/todo-rest.service.ts.md'],
                ['2. todo.component.html', '/assets/md/app/7-http/todo.component.html.md'],
                ['3. todo.component.ts', '/assets/md/app/7-http/todo.component.ts.md'],
                ['4. todo-form.component.html', '/assets/md/app/7-http/todo-form.component.html.md'],
                ['5. todo-form.component.ts', '/assets/md/app/7-http/todo-form.component.ts.md'],
                ['6. todo-list.component.html', '/assets/md/app/7-http/todo-list.component.html.md'],
                ['7. todo-list.component.ts', '/assets/md/app/7-http/todo-list.component.ts.md'],
                ['8. ticket.component.html', '/assets/md/app/7-http/ticket.component.html.md'],
                ['9. ticket.component.ts', '/assets/md/app/7-http/ticket.component.ts.md']
            ])
        })],


        ['/routing', new MarkdownModel({
            noteGeneralFile: '/assets/md/app/8-routing/note.md',
            moduleDir: 'src/app/8-routing',
            mapExamplesCode: new Map<string, string>([
                ['1. routing-routing.module.ts', '/assets/md/app/8-routing/routing-routing.module.ts.md'],
                ['2. todoRest.service.ts', '/assets/md/app/8-routing/todoRest.service.ts.md'],
                ['3. details-todo.resolve.ts', '/assets/md/app/8-routing/details-todo.resolve.ts.md'],
                ['4. user-rights.service.ts', '/assets/md/app/8-routing/user-rights.service.ts.md'],
                ['5. dashboard.guard.ts', '/assets/md/app/8-routing/dashboard.guard.ts.md'],
                ['6. only-admin.guard.ts', '/assets/md/app/8-routing/only-admin.guard.ts.md'],
                ['7. form-todo.guard.ts', '/assets/md/app/8-routing/form-todo.guard.ts.md'],
            ])
        })],
        ['/testing', new MarkdownModel({noteGeneralFile: '/assets/md/app/9-testing/note.md'})],
    ]);

}
