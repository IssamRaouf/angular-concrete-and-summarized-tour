import {Injectable} from '@angular/core';
import {UserMock} from './user.mock';
import * as uuid from 'uuid';
import {Observable, of} from 'rxjs';
import {PostInterface} from './post.interface';
import {PostsMock} from './posts.mock';
import {UserInterface} from './user.interface';


@Injectable()

export class ServiceMockDataService {


    public static getPosts(): Observable<Array<PostInterface>> {
        return of(PostsMock.POSTS_DATA);
    }

    public static getAuthor(): Observable<Array<UserInterface>> {
        return of(UserMock.USERS_DATA);
    }

    public findArticleByUuid(uuid: string): Observable<PostInterface | undefined> {
        const post = PostsMock.POSTS_DATA.find(postIn => postIn.uuid === uuid);
        return of(post);
    }

    public findAuthorByUuid(uuid: string): Observable<UserInterface | undefined> {
        const author = UserMock.USERS_DATA.find(authorIn => authorIn.uuid === uuid);
        return of(author);
    }
}
