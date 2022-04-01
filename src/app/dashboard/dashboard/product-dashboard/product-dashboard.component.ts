import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productModel } from 'src/app/dashboard/dashboard/product-dashboard/product.model';
import { MessageService } from 'src/app/products/service/message.service';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  productId: number = 0;
  productList: productModel | any;
  dataModelObj: productModel = new productModel();
  productData!: any;
  public productForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private api: ProductService,
    activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productname:['', [Validators.required]],
      color:['', [Validators.required]],
      descriptions:['', [Validators.required]],
      productImg:['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      price:['', [Validators.required]],
      rating:['', [Validators.required]],
      is_available:['', [Validators.required]],
      review:['', [Validators.required]],
    });
    this.getProductData();
  }
  clickAddProduct(){
    this.productForm.reset();
  }
  get productControl() {
    return this.productForm.controls;
  }

  addNewProduct(){
    let data = this.productForm.value;
    console.log(data);
    this.httpClient.post<any>('http://localhost:3000/products', data).subscribe(data =>{
      alert('Added Successful');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.productForm.reset();
        this.getProductData();
        this.router.navigate(['/dashboard/product-dashboard']);
      
    },(err) => {
      alert('Something went wrong!');
    });
  }
  getProductData() {
    this.api.showProduct().subscribe((res: any) => {
      this.productData = res;
      console.log(res);
    });
  }
  deleteProductData(data:any){
    let conf = confirm(`${data.username}'s data will be deleted `);
    if (conf) {
      this.api.deleteProduct(data.id).subscribe((res) => {
        this.messageService.showSuccessMessage('User data deleted !');
        this.api.showProduct().subscribe((res) => {
          this.productData = res;
          this.getProductData();
        });
      });
    }
  }
  onEdit(row: any) {
    this.dataModelObj.productId = row.id;
    this.productForm.controls['productname'].setValue(row.productname);
    this.productForm.controls['color'].setValue(row.color);
    this.productForm.controls['descriptions'].setValue(row.descriptions);
    this.productForm.controls['productImg'].setValue(row.productImg);
    this.productForm.controls['categoryId'].setValue(row.categoryId);
    this.productForm.controls['price'].setValue(row.price);
    this.productForm.controls['rating'].setValue(row.rating);
    this.productForm.controls['is_available'].setValue(row.is_available);
    this.productForm.controls['review'].setValue(row.review);
  }

  updateProduct(){
    this.dataModelObj.productname = this.productForm.value.productname;
    this.dataModelObj.color = this.productForm.value.color;
    this.dataModelObj.descriptions = this.productForm.value.descriptions;
    this.dataModelObj.productImg = this.productForm.value.productImg;
    this.dataModelObj.categoryId = this.productForm.value.categoryId;
    this.dataModelObj.price = this.productForm.value.price;
    this.dataModelObj.rating = this.productForm.value.rating;
    this.dataModelObj.is_available = this.productForm.value.is_available;
    this.dataModelObj.review = this.productForm.value.review;

    this.api.updateProduct(this.dataModelObj.productId, this.dataModelObj).subscribe((res) => {
      alert('Added Successful');
      let ref = document.getElementById('cancel');
      ref?.click();
      this.productForm.reset();
      this.getProductData();
      this.router.navigate(['/dashboard/product-dashboard']);
    },
    (err) => {
      alert('Something went wrong!');
    }
    );
  }
}
