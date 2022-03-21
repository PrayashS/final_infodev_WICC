import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { MessageService } from 'src/app/products/service/message.service';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productId:number = 0;
  productList:Product | any; 
  constructor(private productService: ProductService, activatedRoute: ActivatedRoute, private messageService:MessageService, private router:Router) { }

  ngOnInit(): void {
    this.productService.showProduct().subscribe(data=>{
      this.productList = data;
    })
    
  }

  deleteProduct(id:any)
  {
    alert(id)
    this.productService.deleteProduct(id).subscribe(res=>{
      this.messageService.showSuccessMessage("product deleted sucessfully")

      this.productService.showProduct().subscribe(data=>{
        this.productList = data;
      })
      
    },err=>{
      console.log(err)
      this.messageService.showErrorMessage("could not find the product")
      this.router.navigate(['/product-dashboard'])
    })
  }

}
