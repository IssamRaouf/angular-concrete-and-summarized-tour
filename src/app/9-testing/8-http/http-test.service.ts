import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from './ticket.model';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpTestService {
    /**
     * end point api
     */
    protected webServiceUrl: string = 'https://jsonplaceholder.typicode.com';

    public constructor(private httpClient: HttpClient) {
    }


    protected get headers(): HttpHeaders {
        const headers = new HttpHeaders();
        headers.append('Content-type', 'application/json; charset=UTF-8');
        return headers;
    }

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
}
