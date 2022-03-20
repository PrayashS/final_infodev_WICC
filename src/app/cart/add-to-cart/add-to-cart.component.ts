import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/products/service/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  public totalItem: any;
  public product: any =[];
  public grandTotal !:  number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.product = res;
      this.totalItem = res.length;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

}
