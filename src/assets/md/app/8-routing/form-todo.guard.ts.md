````javascript
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {TodoFormComponent} from '../todo-form/todo-form.component';
import {Injectable} from '@angular/core';

@Injectable()
// on peut definir interface implement by notre component et
// ici CanDeactivate<NotreInterface> pour type mais je le laisse simple à ce stade là..
export class FormTodoGuard implements CanDeactivate<any> {


    public canDeactivate(component: TodoFormComponent, currentRoute: ActivatedRouteSnapshot): boolean {
        return component.canExit();
    }

}
````
