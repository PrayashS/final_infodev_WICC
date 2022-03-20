import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      mobile:[''],
      password:[''],

    });
  }
  register(){
    this.httpClient.post<any>("http://localhost:3000/register",this.registerForm.value).subscribe(data=>{
      alert("Signup Successful");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong!")
    })
  
  }
}
