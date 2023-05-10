import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {
  
  myForm!: FormGroup;
  
  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl('')
    });
  }

  submit(){
    const titlePost: string = this.myForm.get('title')?.value;
    const bodyPost: string = this.myForm.get('body')?.value;

    const idPost = Math.floor(Math.random()*(1000-101+1)+101);

    const post = {
      body: bodyPost,
      userId: idPost, 
      title: titlePost, 
    }

    this.onSubmit.emit(post);

  }

}
