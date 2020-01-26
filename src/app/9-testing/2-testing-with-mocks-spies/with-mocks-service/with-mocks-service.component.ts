import {Component} from '@angular/core';
import {AppStateService} from '../services/app-state.service';

@Component({
    selector: 'app-with-mocks-service',
    templateUrl: './with-mocks-service.component.html',
    styleUrls: ['./with-mocks-service.component.scss']
})
export class WithMocksServiceComponent {

    public constructor(private appStateServ: AppStateService) {

    }

    public get canDisplayAddComment(): boolean {
        return this.appStateServ.userIsSuperAdmin || this.appStateServ.userIsGlobalAdmin;
    }

    public get canDisplayEditAction(): boolean {
        return this.appStateServ.userIsSuperAdmin || this.appStateServ.userIsGlobalAdmin;
    }

    public get canDisplayArchiveAcion(): boolean {
        return this.appStateServ.userIsGlobalAdmin;
    }

    public get canDisplayCloseAction(): boolean {
        return this.appStateServ.userIsGlobalAdmin;
    }


}
