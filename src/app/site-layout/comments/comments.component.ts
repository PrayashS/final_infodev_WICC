import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  formStructure: FormGroup | any

  constructor(private fb: FormBuilder) {
    this.formStructure = this.fb.group({
      details: this.fb.array([])
      
    })
    console.log(this.details)
    this.addComment();
  }
  get details(){
    return this.formStructure.get('details') as FormArray
  }
  // get fac(){
  //   return this.formStructure.get('faculty') as FormGroup
  // }
  addComment(){
    const commentForm = this.fb.group({
      name:['', Validators.required],
      comment:['', [Validators.required]],
    })
    this.details.push(commentForm)
    
  }
  deleteComment(index:any){
    this.details.removeAt(index)
  }

}
