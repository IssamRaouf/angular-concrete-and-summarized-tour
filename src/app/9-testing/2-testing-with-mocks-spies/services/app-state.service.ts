import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';

@Injectable()

export class AppStateService {
    // ....

    // On peut le faire mieux que ca 1000 fois , mais on veut le probleme pour l'expliquer.. :D
    public get currentUser(): UserModel {
        return new UserModel(JSON.parse(localStorage.getItem('currentUser')));
    }

    // on peut créer autre service pour UserRights mais on le laisse simple a ce stade là
    public get userIsSuperAdmin(): boolean {
        return this.currentUser.role === 'ROLE_SUPER_ADMIN';
    }

    // on peut créer autre service pour UserRights mais on le laisse simple a ce stade là
    public get userIsGlobalAdmin(): boolean {
        return this.currentUser.role === 'ROLE_GLOBAL_ADMIN';
    }

}
