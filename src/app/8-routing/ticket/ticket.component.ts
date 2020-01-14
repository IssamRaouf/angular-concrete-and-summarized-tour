import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../models/ticket.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {

    @Input() ticket: Ticket;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
    }

    public details(): void {
        this.router.navigate(['../todo-details', this.ticket.id], {relativeTo: this.activatedRoute})
            .then((success) => console.log('navigation success'));
    }

}
