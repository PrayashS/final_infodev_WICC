import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/products/service/message.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('pass') pass !: ElementRef
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
        this.msgService.showSuccessMessage("User Registered")
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      (err) => {
        const error = err.error
        for(let e in error){
          error[e].forEach((error:any)=>{
            this.msgService.showErrorMessage(error)
          })
        }
      }
    );
  }
}



