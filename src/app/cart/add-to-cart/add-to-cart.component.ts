import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/products/service/auth.service';
import { CartService } from 'src/app/products/service/cart.service';
import { MessageService } from 'src/app/products/service/message.service';
import { OrderService } from 'src/app/products/service/order.service';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  totalQuantity = 0;
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private productService: ProductService,
    private messageService: MessageService,
    private router: Router,
    private orderService: OrderService
  ) {}
  productItem: any = [];
  //  cartItem:any = []

  ngOnInit(): void {
    this.cartService.pGetCart().subscribe((res) => {
      for (let ca of res) {
        if (ca.userId == this.authService.getToken())
          // this.cartItem.push(ca)
          this.productService.viewProduct(ca.productId).subscribe((res) => {
            let r: any = {};
            r = res;
            r['cartId'] = ca.id;
            this.productItem.push(r);
            // console.log(r)
            this.totalPrice = this.totalPrice + res.price;
            this.totalQuantity = this.totalQuantity + 1;
          });
      }
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  deleteCartItem(id: any) {
    const c = confirm('are you sure you want to delete?');
    if (c) {
      this.cartService.pRemoveCart(id).subscribe((res) => {
        this.messageService.showSuccessMessage('cart item deleted sucessfully');
        this.reloadCurrentRoute();
      });
    }
  }

  orderProduct() {
    const token = this.authService.checkToken();
    if (token) {
      // this.orderService.postOrder()
      this.cartService.pGetCart().subscribe((res) => {
        for (let ca of res) {
          if (ca.userId == this.authService.getToken())
            // this.cartItem.push(ca)
          
            this.orderService
              .postOrder(this.authService.getToken(), ca.productId)
              .subscribe((res) => {
                this.cartService.pRemoveCart(ca.id).subscribe((res) => {});
              });
        }
        this.messageService.showSuccessMessage("product ordered sucessfully")
        this.router.navigate(['/'])
      },err=>{
        this.router.navigate(['/'])
      });
    }
    else{
      this.router.navigate(['/'])
    }
  }
}
