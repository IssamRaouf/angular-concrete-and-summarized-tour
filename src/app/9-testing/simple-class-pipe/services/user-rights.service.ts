export class UserRightsService {
    public get isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }
}
