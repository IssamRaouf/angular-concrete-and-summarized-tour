import {Injectable} from '@angular/core';
import {UserMock} from './user.mock';


@Injectable()

export class ServiceMockDataService {


    public getPosts() {
        console.log(UserMock.UserData);

    }

    public getAuthor() {

    }
}
