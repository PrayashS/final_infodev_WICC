import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/products/service/admin.service';
import { MessageService } from 'src/app/products/service/message.service';
import { dataModel } from './admin.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dataModelObj : dataModel = new dataModel()
  userData !: any;
  
  constructor(private api: AdminService, private msgService: MessageService) { }

  ngOnInit(): void {
    this.getUserData();
    }
    getUserData() {
      this.api.getData().subscribe((res:any[]) => {
        this.userData = res;
        console.log(res);
      });
    }
          deleteUserData(data : any){
        let conf = confirm(`${data.username}'s data will be deleted `)
        if (conf){
        this.api.deleteData(data.id)
        .subscribe(res=>{
          this.msgService.showSuccessMessage("User data deleted !")
            this.api.getData().subscribe(res=>{
              this.userData=res
          this.getUserData();
        })
      })
      }
    }
}


