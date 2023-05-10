import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlaceholderService } from 'src/app/services/placeholder.service';

@Component({
  selector: 'app-publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.css']
})
export class PublishPostComponent implements OnInit {

  myForm!: FormGroup;
  toogleAlert:boolean = false;
  alertText:string = '';


  constructor( private placeholderService: PlaceholderService ){}

  ngOnInit() {

    this.myForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });

  }

  createPost( body:any ){
    this.placeholderService.createPost(body).subscribe((data) => {
      this.toogleAlert = true;
      this.alertText = 'publicado';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    })
  }

  publishPost( post:any ){
    this.createPost( post );
  }


}
