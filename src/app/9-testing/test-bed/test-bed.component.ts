import {Component} from '@angular/core';
import {AppStateService} from '../testing-with-mocks-spies/services/app-state.service';

@Component({
    selector: 'app-test-bed',
    templateUrl: './test-bed.component.html',
    styleUrls: ['./test-bed.component.scss']
})
export class TestBedComponent {

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
