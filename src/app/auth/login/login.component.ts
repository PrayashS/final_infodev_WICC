import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/products/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    });
  }
  login(){
    if(this.loginForm.invalid){
      return;
    }
    this.httpClient.get<any>("http://localhost:3000/register").subscribe(data =>{
      const user = data.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.authService.saveToken(this.loginForm.value['email'])
        this.loginForm.reset();
        this.router.navigate(['products'])
      }else{
        alert("Your email or password do not match")
      }
      },err=>{
        alert("Something went wrong")
    });
  }
}
