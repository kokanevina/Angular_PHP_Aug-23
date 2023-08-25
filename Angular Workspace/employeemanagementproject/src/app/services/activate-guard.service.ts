import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuardService implements CanActivate{

  constructor(private _login:LoginService, private _router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._login.loginFlag==false){
      window.alert("Please login first.....");
      this._router.navigate(['login']); // SPA, view getting updated
    }
    return this._login.loginFlag;
  }





  
}
