import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  showSuccessMessage(message:any){
    console.log(message )
  }
  showErrorMessage(error:any){
    console.log(error)
  }
}
