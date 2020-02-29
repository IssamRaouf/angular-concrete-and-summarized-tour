
```javascript

import {
    Component, OnInit, OnChanges, Input, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import {Ticket} from '../models/ticket.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() ticketList: Array<Ticket>;
    public listDetailsHooks: Array<object> = [];
    public counter = 0;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
        for (const key in changes) {
            console.log(`changes isFirstChange : ${changes[key].isFirstChange()}`);
            console.log(`Current Value for ${key} is `, changes[key].currentValue);
            console.log(`Previous Value for ${key} is :`, changes[key].previousValue);
        }
        this.setListDetailsHooks('ngOnChanges', changes);
    }

    ngOnInit() {
        this.setListDetailsHooks('ngOnInit');
        console.log(`ngOnInit  - ticketList is ${this.ticketList}`);
    }

    ngDoCheck() {
        this.setListDetailsHooks('ngDoCheck');
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        this.setListDetailsHooks('ngAfterContentInit');
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        this.setListDetailsHooks('ngAfterContentChecked');
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        this.setListDetailsHooks('ngAfterViewInit');
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        this.setListDetailsHooks('ngAfterViewChecked');
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        this.setListDetailsHooks('ngOnDestroy');
        console.log('ngOnDestroy');
    }

    /**
     *
     * @param name
     * @param details
     */
    private setListDetailsHooks(name: string, details: object = {}): void {
        this.counter++;
        const obj = {num: this.counter, name};

        if (Object.keys(details).length > 0) {
            obj['details'] = details;
        }

        this.listDetailsHooks.push(obj);
    }

    public clear(): void {
        this.counter = 0;
        this.listDetailsHooks = [];
    }

    public isArray(obj): boolean {
        return Array.isArray(obj);
    }

}

```
