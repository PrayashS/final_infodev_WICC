import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService:ToastrService) { }
  showSuccessMessage(message:any){
    this.toastrService.success(message)
  }
  showErrorMessage(error:any){
    this.toastrService.error(error)
  }
}
