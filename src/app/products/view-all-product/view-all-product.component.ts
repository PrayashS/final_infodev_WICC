import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productList:Product | any; 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.showProduct().subscribe(data=>{
      this.productList = data;
    })
    
  }

}


