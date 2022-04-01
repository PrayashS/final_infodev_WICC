import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/products/service/admin.service';
import { MessageService } from 'src/app/products/service/message.service';
import { dataModel } from './admin.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  // dataModelObj : dataModel = new dataModel()
  // userData !: any;

  // constructor(private api: AdminService, private msgService: MessageService) { }

  // ngOnInit(): void {
  //   this.getUserData();
  //   }
  //   getUserData() {
  //     this.api.getData().subscribe((res:any[]) => {
  //       this.userData = res;
  //       console.log(res);
  //     });
  //   }
  //         deleteUserData(data : any){
  //       let conf = confirm(`${data.username}'s data will be deleted `)
  //       if (conf){
  //       this.api.deleteData(data.id)
  //       .subscribe(res=>{
  //         this.msgService.showSuccessMessage("User data deleted !")
  //           this.api.getData().subscribe(res=>{
  //             this.userData=res
  //         this.getUserData();
  //       })
  //     })
  //     }
  //   }
  filteredString!: any
  search=""
  userID: number = 0;
  userDetails: dataModel | any;
  dataModelObj: dataModel = new dataModel();
  userData!: any;
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private api: AdminService,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.getUserData();
  }

  clickAddUser(){
    this.registerForm.reset();
  }
  get registerControl() {
    return this.registerForm.controls;
  }

  register() {
    let data = this.registerForm.value;
    data['isadmin'] = false;
    console.log(data);
    this.httpClient.post<any>('http://localhost:3000/register', data).subscribe(
      (data) => {
        alert('Added Successful');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.registerForm.reset();
        this.getUserData();
        this.router.navigate(['dashboard']);
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
  getUserData() {
    this.api.getData().subscribe((res: any[]) => {
      this.userData = res;
      console.log(res);
    });
  }
  deleteUserData(data: any) {
    let conf = confirm(`${data.username}'s data will be deleted `);
    if (conf) {
      this.api.deleteData(data.id).subscribe((res) => {
        this.msgService.showSuccessMessage('User data deleted !');
        this.api.getData().subscribe((res) => {
          this.userData = res;
          this.getUserData();
        });
      });
    }
  }
  onEdit(row: any) {
    this.dataModelObj.id = row.id;
    this.registerForm.controls['fullname'].setValue(row.fullname);
    this.registerForm.controls['email'].setValue(row.email);
    this.registerForm.controls['mobile'].setValue(row.mobile);
    this.registerForm.controls['password'].setValue(row.password);
  }
  updateUser() {
    this.dataModelObj.fullname = this.registerForm.value.fullname;
    this.dataModelObj.email = this.registerForm.value.email;
    this.dataModelObj.mobile = this.registerForm.value.mobile;
    this.dataModelObj.password = this.registerForm.value.password;
    this.api
      .updateData(this.dataModelObj.id, this.dataModelObj)
      .subscribe((res) => {
        alert('Added Successful');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.registerForm.reset();
        this.getUserData();
        this.router.navigate(['dashboard']);
      },
      (err) => {
        alert('Something went wrong!');
      }
      );
  }
}
