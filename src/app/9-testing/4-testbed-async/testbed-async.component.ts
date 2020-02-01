import {Component, OnInit} from '@angular/core';
import {AppStateService} from '../services/app-state.service';

@Component({
    selector: 'app-testbed-async',
    templateUrl: './testbed-async.component.html',
    styleUrls: ['./testbed-async.component.scss']
})
export class TestbedAsyncComponent implements OnInit {
    public isGlobalAdmin: boolean;

    public constructor(private appStateServ: AppStateService) {

    }

    public ngOnInit(): void {
        this.appStateServ.userIsGlobalAdminPromise().then((state) => this.isGlobalAdmin = state);
    }

    public get canDisplayAddComment(): boolean {
        return this.isGlobalAdmin;
    }

}
