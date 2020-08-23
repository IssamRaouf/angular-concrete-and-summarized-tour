import {Component, OnInit, Input} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import * as introJs from 'intro.js/intro.js';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
    @Input() ticketList: Array<Ticket>;


    constructor() {


    }
    public ngOnInit(): void {
        this.showMe();
    }

    public showMe(): void {
        console.log(document.querySelector('#check'));
        const intro = introJs();
        intro.setOptions({
            steps: [
                {
                    intro: "Hello world!"
                },
                {
                    intro: "You <b>don't need</b> to define element to focus, this is a floating tooltip."
                },
                {
                    element: document.querySelector('#step1'),
                    intro: "This is a tooltip."
                },
                {
                    element: document.querySelectorAll('#step2')[0],
                    intro: "Ok, wasn't that fun?",
                    position: 'right'
                },
                {
                    element: '#step3',
                    intro: 'More features, more fun.',
                    position: 'left'
                },
                {
                    element: '#step4',
                    intro: "Another step.",
                    position: 'bottom'
                },
                {
                    element: '#step5',
                    intro: 'Get it, use it.'
                }
            ]
        });

        intro.start();
    }


}
