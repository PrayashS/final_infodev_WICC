import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/products/service/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  orderData :any;
  constructor( private http: HttpClient, private api: OrderService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/order').subscribe((data)=>{
      this.orderData = data;
    })
  }

}
