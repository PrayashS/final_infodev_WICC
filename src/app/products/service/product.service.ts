import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/site-layout/category';
import { Product} from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody:any):Observable <any>{
    const baseUrl="http://localhost:3000/products";
    return this.httpClient.post(baseUrl, productBody);
  }
  viewProduct(categoryId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+ categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }
  showProduct():Observable<Product>{
    const baseUrl="http://localhost:3000/products/";
    return this.httpClient.get<Product>(baseUrl);
  }
  updateProduct(productId:any, productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }
  deleteProduct(productId:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(categoryId:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/"
    return this.httpClient.get<Product>(baseUrl, {
      params: new HttpParams().set('categoryId', categoryId)
      });
  }
  // searchCategoryProduct(categoryId:any):Observable<Product>{
  //   const baseUrl="http://localhost:3000/products?category=" +categoryId;
  //   return this.httpClient.get<Product>(baseUrl);
  // }

  searchDateProduct(dateParams:any):Observable<Product>{
    const baseUrl="http://localhost:3000/products/date="+dateParams;
    return this.httpClient.get<Product>(baseUrl);
  }
  getCategory(){
    const categoryUrl="http://localhost:3000/categories"
    return this.httpClient.get<Category>(categoryUrl);
  }
}
