import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
import { MessageService } from '../service/message.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID:number = 0;
  productData: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService,private router:Router, private authService:AuthService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productID = data['id'];
    
    })
    this.productService.viewProduct(this.productID).subscribe(viewData =>{
      this.productData = viewData;
      this.productData = JSON.parse(this.productData)
      this.productData.array.forEach((a:any )=> {
        Object.assign(a,{quantity:1}, {total:a.price});
      });
    })
  }
  addtocart(pId: any){
  const token = this.authService.checkToken()
  const data = {
    productId:pId,
    quantity:1
  }
  if(token){
     const uId = this.authService.getToken()
     this.cartService.pAddToCart(uId,data).subscribe(res=>{
       this.messageService.showSuccessMessage("product added to the cart")
       this.router.navigate(['/cart/addcart'])
     })
  }
  else{
    this.router.navigate(['/auth/login'])
  }
    
    // this.cartService.addtoCart(item);
  }
  deleteProduct(id:any)
  {
    this.productService.deleteProduct(id).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/'])
    })
  }

}
