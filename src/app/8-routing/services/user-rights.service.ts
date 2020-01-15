import {UserModel} from '../models/user.model';
import {Injectable} from '@angular/core';

@Injectable()
export class UserRightsService {
    private user: UserModel;

    constructor() {
        // toggle isAdmin (true | false) pour voir la fonctionnement de guard
        this.user = new UserModel({id: 9999, username: 'issam raouf', email: 'iraouf.soft@gmail.com', isAdmin: false});
    }


    public get isAdmin(): boolean {
        return this.user.isAdmin;
    }

}
