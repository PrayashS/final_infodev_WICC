import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/products/service/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList:Category | any;
  id: any;
  constructor(private productsService: ProductService, private router: Router) { 
    
  }
  

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data => {
      this.categoryList = data;
    })
  }
  catgNav(id: any){
    // this.router.navigate(['/products/category/', id]);
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/products/category/' + id]));
  }

}
