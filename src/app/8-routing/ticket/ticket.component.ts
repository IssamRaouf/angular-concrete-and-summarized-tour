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

    /**
     * @form docs
     * Specifies a root URI to use for relative navigation.
     *
     * For example, consider the following route configuration where the parent route
     * has two children.
     *
     * ```
     * [{
     *   path: 'parent',
     *   component: ParentComponent,
     *   children: [{
     *     path: 'list',
     *     component: ListComponent
     *   },{
     *     path: 'child',
     *     component: ChildComponent
     *   }]
     * }]
     * ```
     *
     * The following `go()` function navigates to the `list` route by
     * interpreting the destination URI as relative to the activated `child`  route
     *
     * ```
     *  @Component({...})
     *  class ChildComponent {
     *    constructor(private router: Router, private route: ActivatedRoute) {}
     *
     *    go() {
     *      this.router.navigate(['../list'], { relativeTo: this.route });
     *    }
     *  }
     * ```
     */
    public details(): void {
        this.router.navigate(['../todo-details', this.ticket.id], {relativeTo: this.activatedRoute})
            .then((success) => console.log('navigation success'));
    }

}
