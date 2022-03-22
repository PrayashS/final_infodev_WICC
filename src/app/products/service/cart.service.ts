import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[];
  public productList = new BehaviorSubject<any>([]);
  url = "http://localhost:3000/cart"
  constructor(private httpClient: HttpClient) { }
  
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })  
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  pAddToCart(uid:any,data:any){
    data['userId'] = uid
    return this.httpClient.post(this.url,data)
  }

  pGetCart():Observable<any>{
    return this.httpClient.get(this.url)
  }
  pRemoveCart(id:any){
    return this.httpClient.delete(this.url+'/'+id)
    
  }
}
