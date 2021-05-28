import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        if(!this.auth.isUserLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}