import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/products/service/auth.service';
import { CartService } from 'src/app/products/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: any;
  isLogedin=false;
  constructor(private cartService:CartService,private authService:AuthService, private router: Router) { 

   this.isLogedin = this.authService.checkToken()
  }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  logout(){
    this.authService.removeToken();
    this.router.navigate(['/auth/login'])
  }

}
