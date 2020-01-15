import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../models/ticket.model';

@Component({
    selector: 'app-details-todo',
    templateUrl: './details-todo.component.html',
    styleUrls: ['./details-todo.component.scss']
})
export class DetailsTodoComponent implements OnInit {

    public ticket: Ticket;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        this.ticket = this.activatedRoute.snapshot.data.detailsTodo;
        console.log('this.ticket', this.ticket);
    }

}
