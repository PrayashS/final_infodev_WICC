import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID:number =0;
  productDetails: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productID = data['id'];

      this.productService.viewProduct(this.productID).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails)
      })
    })
  }
  updateProduct(form:any){
    console.log(form.value);
    this.productService.updateProduct(this.productID, form.value).subscribe(data =>{
      
      console.log(data);
      
    }, err => {
      console.log(err)
    });
    form.reset();
  }
}
