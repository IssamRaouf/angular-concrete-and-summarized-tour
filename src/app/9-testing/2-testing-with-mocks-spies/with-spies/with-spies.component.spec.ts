import {WithSpiesComponent} from './with-spies.component';
import {AppStateService} from '../../services/app-state.service';

describe('WithSpiesComponent', () => {
    let component: WithSpiesComponent;
    let AppStateSer: AppStateService;

    beforeEach(() => {
        AppStateSer = new AppStateService();
        component = new WithSpiesComponent(AppStateSer);

    });
    afterEach(() => {
        AppStateSer = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should display the add comment action for user has role Global admin', () => {
        spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);

        expect(component.canDisplayAddComment).toBeTruthy();
    });
    it('Should display the add comment action for user has role Super admin', () => {
        spyOnProperty(AppStateSer, 'userIsSuperAdmin').and.returnValue(true);
        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        expect(component.canDisplayAddComment).toBeFalsy();
    });
});
