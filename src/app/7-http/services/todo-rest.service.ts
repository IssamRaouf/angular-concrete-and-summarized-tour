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
     * Envoyer au server demande de type get<Array<ticket>> (Array<ticket> type de http response , est optionnelle)
     * url des resources demandées et les options
     * {
     *          headers: this.headers, (headers de requests)
     *           responseType: 'json', type de result
     *           observe: 'response' , observe response complete, on peut observer juste le body de response
     *       }
     * NB:tout les methodes de HttpClient basés sur les observables (rxjs qu'on a dejà vu..)
     * comme ca ,on a fait un pipe et map le result, list des objects de type any à list des objects de type ticket
     */
    public getListTodo(): Observable<Array<Ticket>> {
        const url = this.webServiceUrl + '/todos';

        return this.httpClient.get<Array<Ticket>>(url,
            {
                headers: this.headers,
                responseType: 'json',
                observe: 'response'
            }).pipe(
            // map result
            map((response: HttpResponse<Array<Ticket>>) => response.body.map(item => new Ticket(item))),
        );
    }

    /**
     * Envoyer au server demande de type get<Array<UserModel>> (Array<UserModel> type de http response , est optionnelle)
     * url des resources demandées et les options
     * {
     *          headers: this.headers, (headers de requests)
     *           responseType: 'json', type de result
     *           observe: 'response' , observe response complete, on peut observer juste le body de response
     *       }
     * NB:tout les methodes de HttpClient basés sur les observables (rxjs qu'on a dejà vu..)
     * comme ca ,on a fait un pipe et map le result, list des objects de type any à list des objects de type UserModel
     */
    public getListUsers(): Observable<Array<UserModel>> {
        const url = this.webServiceUrl + '/users';

        return this.httpClient.get<Array<UserModel>>(url, {
            headers: this.headers,
            responseType: 'json',
            observe: 'response'

        }).pipe(
            map((response: HttpResponse<Array<UserModel>>) => response.body.map(item => new UserModel(item))),
        );
    }

    /**
     *
     * @param todo
     * Envoyer au server demande de post post<ticket> (<ticket> type de http response , est optionnelle)
     * url de resource et les options
     * {
     *          headers: this.headers, (headers de requests)
     *           responseType: 'json', type de result
     *           observe: 'response' , observe response complete, on peut observer juste le body de response
     *       }
     * NB:tout les methodes de HttpClient basés sur les observables (rxjs qu'on a dejà vu..)
     * comme ca ,on a fait un pipe et map le result, object de type any à object de type ticket
     */
    public addTodo(todo: Ticket): Observable<Ticket | any> {
        const url = this.webServiceUrl + '/todos';

        return this.httpClient.post<Ticket>(url, JSON.stringify(todo), {
            headers: this.headers,
            responseType: 'json',
            observe: 'response'
        }).pipe(
            map(response => new Ticket(response.body)),
        );

    }

    /**
     *
     * @param todo
     * Envoyer au server demande de delete delete<ticket> (<ticket> type de http response , est optionnelle)
     * url de resource et les options
     * {
     *          headers: this.headers, (headers de requests)
     *           responseType: 'json', type de result
     *           observe: 'response' , observe response complete, on peut observer juste le body de response
     *       }
     * NB:tout les methodes de HttpClient basés sur les observables (rxjs qu'on a dejà vu..)
     */
    public deleteTodo(todo: Ticket): Observable<any> {
        const url = this.webServiceUrl + `/todos/${todo.id}`;
        return this.httpClient.delete<Ticket>(url, {
            headers: this.headers,
            responseType: 'json',
            observe: 'body'
        });
    }

    /**
     *
     * @param todo
     * Envoyer au server demande de put put<ticket> (<ticket> type de http response , est optionnelle)
     * url de resource et les options
     * {
     *          headers: this.headers, (headers de requests)
     *           responseType: 'json', type de result
     *           observe: 'response' , observe response complete, on peut observer juste le body de response
     *       }
     * NB:tout les methodes de HttpClient basés sur les observables (rxjs qu'on a dejà vu..)
     * comme ca ,on a fait un pipe et map le result, object de type any à object de type ticket
     */
    public putTodo(todo: Ticket): Observable<Ticket | any> {
        const url = this.webServiceUrl + `/todos/${todo.id}`;
        return this.httpClient.put<Ticket>(url, JSON.stringify(todo), {
            headers: this.headers,
            responseType: 'json',
            observe: 'response'
        }).pipe(
            map(response => new Ticket(response.body)),
        );

    }


}
