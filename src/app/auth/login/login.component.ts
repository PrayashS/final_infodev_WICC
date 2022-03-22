import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/products/service/auth.service';
import { MessageService } from 'src/app/products/service/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('pass') pass !: ElementRef

  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private authService:AuthService, private msgService: MessageService) { }
  id:any
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }
  get loginControl(){
    return this.loginForm.controls;
  }
  showPassword(){
    let type = this.pass.nativeElement.type
    if(type==='password')
    {
      this.pass.nativeElement.type='text'
    }
    else{
      this.pass.nativeElement.type='password'
    }
  
 
  }
  login(){
    if(this.loginForm.invalid){
      return;
    }
    this.httpClient.get<any>("http://localhost:3000/register").subscribe(data =>{
      const user = data.find((a:any)=>{
        if( a.email === this.loginForm.value.email && a.password === this.loginForm.value.password)
        {
          this.id = a.id
        }
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        
      });
      if(user){
        this.msgService.showSuccessMessage(`Logged In Succesfully`);
        this.authService.saveToken(this.id)
        this.loginForm.reset();
        this.router.navigate(['products'])
      }else{
        // alert("Your email or password do not match")
        this.msgService.showErrorMessage("your email or password do not match")
      }
      },err=>{
        alert("Something went wrong")
    });
  }
}
