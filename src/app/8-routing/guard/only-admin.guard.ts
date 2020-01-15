import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserRightsService} from '../services/user-rights.service';
import {Injectable} from '@angular/core';

@Injectable()
export class OnlyAdminGuard implements CanActivate {

    public constructor(private userRightsService: UserRightsService, private router: Router) {

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.userRightsService.isAdmin) {
            this.router.navigate(['routing']);
            console.log("Impossible d'accéder à cette page");
            return false;
        }

        return true;
    }
}
