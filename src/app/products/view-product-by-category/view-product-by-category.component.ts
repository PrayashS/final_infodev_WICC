import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
searchCategory: Category | any;
productList: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { 
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
      // this.searchCategory = data['id'];
      
      this.productService.searchCategoryProduct(id).subscribe(categoryData =>{
        this.productList = categoryData;
      })
    // this.activatedRoute.queryParams.subscribe(data => {
    //   this.searchCategory = data['id'];

    //   this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
    //     this.productList = categoryData;
    //   })
    // })
    
    }
  }


