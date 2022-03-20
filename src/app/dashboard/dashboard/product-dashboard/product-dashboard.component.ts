import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productId:number = 0;
  productList:Product | any; 
  constructor(private productService: ProductService, activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.showProduct().subscribe(data=>{
      this.productList = data;
    })
    
  }

}
