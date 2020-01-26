import {Component} from '@angular/core';
import {AppStateService} from '../services/app-state.service';

@Component({
    selector: 'app-with-real-service',
    templateUrl: './with-real-service.component.html',
    styleUrls: ['./with-real-service.component.scss']
})
export class WithRealServiceComponent {

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
