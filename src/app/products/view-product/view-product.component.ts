import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID:number = 0;
  productData: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productID = data['id'];
    
    })
    this.productService.viewProduct(this.productID).subscribe(viewData =>{
      this.productData = viewData;
      this.productData = JSON.parse(this.productData)
      this.productData.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price});
      });
      
    })
  }
  addtocart(productData: any){
    this.cartService.addtoCart(productData);
  }

}
