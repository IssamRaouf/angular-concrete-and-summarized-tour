/**
 * pour le debutant je vais ecrire un simple code..(no refactoring no ...)
 * j'utilise fake https://jsonplaceholder.typicode.com
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Ticket} from '../models/ticket.model';
import {catchError, map, tap} from 'rxjs/operators';
import {UserModel} from '../models/user.model';


@Injectable()

export class TodoRestService {
    /**
     * end point api
     */
    protected webServiceUrl: string = 'https://jsonplaceholder.typicode.com';

    public constructor(private httpClient: HttpClient) {
    }

    /**
     * Dans les requêtes, (telles que POST ou PUT..., le client indique au serveur quel type de données a réellement été envoyé.
     */
    protected get headers(): HttpHeaders {
        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json; charset=UTF-8');
        return headers;
    }

    /**
     * voir details sur note.md
     */

    public getListTodo(): Observable<Array<Ticket>> {
        const url = this.webServiceUrl + '/todos';

        return this.httpClient.get<Array<Ticket>>(url, {
            headers: this.headers,
            responseType: 'json',
            withCredentials: false,
            observe: 'response'

        }).pipe(
            tap(() => console.log('HTTP GET - ' + url)),
            map((response: HttpResponse<Array<Ticket>>) => response.body.map(item => new Ticket(item))),
            catchError((error) => {
                console.log(`Error on call HTTP GET -   ${url}`, error);
                // Laissez l'application continuer à fonctionner en renvoyant un array vide.
                return of([]);
            })
        );
    }

    public getListUsers(): Observable<Array<UserModel>> {
        const url = this.webServiceUrl + '/users';

        return this.httpClient.get<Array<UserModel>>(url, {
            headers: this.headers,
            responseType: 'json',
            withCredentials: false,
            observe: 'response'

        }).pipe(
            tap(() => console.log('HTTP GET - ' + url)),
            map((response: HttpResponse<Array<UserModel>>) => response.body.map(item => new UserModel(item))),
            catchError((error) => {
                console.log(`Error on call HTTP GET -   ${url}`, error);
                // Laissez l'application continuer à fonctionner en renvoyant un array vide.
                return of([]);
            })
        );
    }

    public addTodo(todo: Ticket): Observable<Ticket | any> {

        const url = this.webServiceUrl + '/todos';
        return this.httpClient.post<number>(url, JSON.stringify(todo), {
            headers: this.headers,
            responseType: 'json',
            withCredentials: false,
            observe: 'response'
        }).pipe(
            tap(() => console.log('HTTP POST - ' + url)),
            map(response => new Ticket(response.body)),
            catchError((error) => {
                console.log(`Error on call HTTP post -   ${url}`, error);
                // Laissez l'application continuer à fonctionner en renvoyant un array vide.
                return of([]);
            })
        );

    }

}
