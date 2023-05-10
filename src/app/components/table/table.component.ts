import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Output()
  onSubmitInfo: EventEmitter<any> = new EventEmitter();

  posts: Post[] = [];
  arrPosts: any[] = [];
  currentPage: number = 0;
  titlePost:string = '';
  idPost!:number;
  toogleAlert:boolean = false
  bodyPost:string | undefined;
  userIdPost:number | undefined;
  alertText:string = '';

  myForm!: FormGroup;

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    
    this.getPosts();

    this.myForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });

  }

  getPosts() {
    this.placeholderService.getAllPosts().subscribe((posts) => {
      this.arrPosts = posts;
      this.posts = this.arrPosts[0];
    })
  }

  deletePost( id:number ){
    this.placeholderService.deletePost( id ).subscribe( (data) => {
      this.posts = this.arrPosts[this.currentPage];
      this.toogleAlert = true;
      this.alertText = 'eliminado';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    } )
  }

  updatePost( id:number, body: any ){

    this.placeholderService.updatePost( id, body ).subscribe( (data) => {
      this.posts = this.arrPosts[this.currentPage];
      this.toogleAlert = true;
      this.alertText = 'editado';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    } )

  }

  tooglePaginador(toogle: boolean) {
    if (toogle) {
      this.currentPage = this.currentPage + 1;
      this.posts = this.arrPosts[this.currentPage]
    } else {
      this.currentPage = this.currentPage - 1;
      this.posts = this.arrPosts[this.currentPage]
    }
  }

  infoPost( titlePost:string, idPost:number, bodyPost?:string, userId?:number ){
    this.titlePost = titlePost;
    this.idPost = idPost;
    this.bodyPost = bodyPost;
    this.userIdPost = userId;
    const infoEmit = {
      id: this.idPost,
      body: this.bodyPost,
      title: this.titlePost,
      userId: this.userIdPost
    }
    this.loadInfo()
    this.onSubmitInfo.emit( infoEmit );
  }

  loadInfo(){
    this.myForm.get('title')?.setValue(this.titlePost);
    this.myForm.get('body')?.setValue(this.bodyPost);
  }

  onSubmit() {

    const titlePost: string = this.myForm.get('title')?.value;
    const bodyPost: string = this.myForm.get('body')?.value;

    const post:Post = {
      title: titlePost,
      body: bodyPost,
      id: this.idPost,
      userId: this.userIdPost
    }
    
    this.updatePost( this.idPost, post );
    
  }

  updateData(data:any){
    this.posts = data;
  }

}
