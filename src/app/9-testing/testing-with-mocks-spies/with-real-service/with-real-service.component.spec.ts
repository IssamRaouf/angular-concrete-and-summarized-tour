import {WithRealServiceComponent} from './with-real-service.component';
import {AppStateService} from '../services/app-state.service';
import {UserModel} from '../models/user.model';

describe('WithRealServiceComponent', () => {
    let component: WithRealServiceComponent;
    let AppStateSer: AppStateService;

    beforeEach(() => {
        AppStateSer = new AppStateService();
        component = new WithRealServiceComponent(AppStateSer);

    });
    afterEach(() => {
        AppStateSer = null;
        component = null;
        localStorage.removeItem('currentUser');
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should display the add comment action for user has role Global admin', () => {
        const user = new UserModel({fullName: 'Issam Raouf', role: 'ROLE_GLOBAL_ADMIN'});
        localStorage.setItem('currentUser', JSON.stringify(user));
        expect(component.canDisplayAddComment).toBeTruthy();
    });
    it('Should display the add comment action for user has role Super admin', () => {
        const user = new UserModel({fullName: 'Issam Raouf', role: 'ROLE_SUPER_ADMIN'});
        localStorage.setItem('currentUser', JSON.stringify(user));

        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        const user = new UserModel({fullName: 'Issam Raouf', role: 'ROLE_USER'});
        localStorage.setItem('currentUser', JSON.stringify(user));
        expect(component.canDisplayAddComment).toBeFalsy();
    });


});
