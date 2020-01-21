import {UserRightsService} from './user-rights.service';

describe('Service UserRights', () => {
    let userRights = null;
    beforeEach(() => {
        userRights = new UserRightsService();
    });
    afterEach(() => {
        userRights = null;
        localStorage.clear();
    });

    it('Should create ', () => {
        expect(userRights).toBeTruthy();
    });
    it('should return false from IsAuthenticated when there is no token ', () => {
        expect(userRights.isAuthenticated).toBeFalsy();
    });
    it('should return true form isAuthenticated when there is a token', () => {
        localStorage.setItem('token', 'ABCVG9890');
        expect(userRights.isAuthenticated).toBeTruthy();
    });

});
