import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/products/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmindashGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.authService.checkToken()
      if(token)
      {
          return new Observable<boolean>(obs=>{
            this.authService.adminOrNot(this.authService.getToken()).subscribe(res=>{
            
              if(res['isadmin'])
              {
                return true
              }
              else{
                this.router.navigate(['/'])
                return false
              }
            })
          })
      }
      else{
        this.router.navigate(['/'])
        return false
      }
  }
  
}
