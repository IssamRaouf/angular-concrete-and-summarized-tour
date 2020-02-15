import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
    @Output() loggedIn = new EventEmitter<UserModel>();
    @Input() enabled = true;

    constructor() {
    }

    ngOnInit() {
    }

    login(username: string, password: string): void {
        if (username && password) {
            this.loggedIn.emit(new UserModel({username, password}));
        }
    }

}
