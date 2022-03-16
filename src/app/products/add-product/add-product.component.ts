import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form:any){
    console.log(form.value);
    this.productService.createProduct(form.value).subscribe(data =>{
      
      console.log(data);
      
    }, err => {
      console.log(err)
    });
    form.reset();
  }
}
