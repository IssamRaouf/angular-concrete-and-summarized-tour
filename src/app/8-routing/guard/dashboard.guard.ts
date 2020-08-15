import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {UserRightsService} from '../services/user-rights.service';
import {Injectable} from '@angular/core';

@Injectable()
export class DashboardGuard implements CanActivateChild {

    public constructor(private userRightsService: UserRightsService, private router: Router) {

    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.userRightsService.isAuth) {
            this.router.navigate(['content-projection']);
            alert("Impossible d'accéder à cette page, FORM GUARD DashboardGuard");
            return false;
        }

        return true;
    }
}
