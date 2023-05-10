import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;
  toogleAlert:boolean = false;
  alertText:string = '';

  constructor ( private placeholderService: PlaceholderService ) {}

  ngOnInit(): void {
    
    this.myForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });

  }
  title = 'prueba-tecnica';

  createPost( body:any ){
    this.placeholderService.createPost(body).subscribe((data) => {
      this.toogleAlert = true;
      this.alertText = 'publicada';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    })
  }

  onSubmit(){

    const titlePost: string = this.myForm.get('title')?.value;
    const bodyPost: string = this.myForm.get('body')?.value;

    const idPost = Math.floor(Math.random()*(1000-101+1)+101);

    const post = {
      body: bodyPost,
      id: idPost, 
      title: titlePost, 
    }

    this.createPost( post );


  }

}
