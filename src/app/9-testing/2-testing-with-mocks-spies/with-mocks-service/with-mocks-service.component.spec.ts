import {WithMocksServiceComponent} from './with-mocks-service.component';
import {AppStateService} from '../../services/app-state.service';

class MockAppStateService extends AppStateService {
    public isGlobalAdmin: boolean = false;
    public isSuperAdmin: boolean = false;

    public get userIsSuperAdmin(): boolean {
        return this.isSuperAdmin;
    }

    public get userIsGlobalAdmin(): boolean {
        return this.isGlobalAdmin;
    }
}

describe('WithMocksServiceComponent', () => {
    let component: WithMocksServiceComponent;
    let mockAppStateService: MockAppStateService;

    beforeEach(() => {
        mockAppStateService = new MockAppStateService();
        component = new WithMocksServiceComponent(mockAppStateService);

    });
    afterEach(() => {
        mockAppStateService = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should display the add comment action for user has role Global admin', () => {
        mockAppStateService.isGlobalAdmin = true;
        expect(component.canDisplayAddComment).toBeTruthy();
    });
    it('Should display the add comment action for user has role Super admin', () => {
        mockAppStateService.isSuperAdmin = true;
        expect(component.canDisplayAddComment).toBeTruthy();
    });


    it('Should only display the add comment action for users with the role global or super admin', () => {
        expect(component.canDisplayAddComment).toBeFalsy();
    });


});
