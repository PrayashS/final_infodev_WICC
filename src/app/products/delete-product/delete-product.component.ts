import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
productId: number = 0;
  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.productId = data['id'];
      this.productService.deleteProduct(this.productId).subscribe(deletedData => {
        console.log("Product Deleted")
      })
    })
  }

}
