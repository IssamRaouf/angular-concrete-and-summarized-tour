import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Ticket} from '../models/ticket.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {TodoRestService} from '../services/todoRest.service';

@Injectable()
export class DetailsTodoResolve implements Resolve<Ticket> {

    public constructor(private todoRest: TodoRestService) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket> {
        const todoId = +route.paramMap.get('id');
        return this.todoRest.getDetailsTodoMook(todoId);

    }

}
