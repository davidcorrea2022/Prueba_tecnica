import { Component } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {

  titlePostEdit:string = '';
  bodyPostEdit:string = '';
  idPost!:number;
  userIdPost!:number;

  textPostDelete:string = `Desea eliminar el componente?`;

  toogleAlert:boolean = false;
  alertText:string = '';


  constructor( private placeholderService: PlaceholderService ){}



  deletePost( id:number ){
    this.placeholderService.deletePost( id ).subscribe( (data) => {
      this.toogleAlert = true;
      this.alertText = 'eliminado';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    } )
  }

  updatePost( id:number, body: any ){

    this.placeholderService.updatePost( id, body ).subscribe( (data) => {
      this.toogleAlert = true;
      this.alertText = 'editado';
      setTimeout(() => {
        this.toogleAlert = false
      }, 3000);
    } )

  }

  info( dataTable:any ){
    this.idPost = dataTable.id;
    this.userIdPost = dataTable.userId;
    this.titlePostEdit = dataTable.title;
    this.bodyPostEdit = dataTable.body;

  }

  submitModalDelete( ){
    this.deletePost( this.idPost );
  }

  submitModalUpdate( dataDelete:any ){
    
    const post:Post = {
     id: this.idPost,
     userId: this.userIdPost,
     title: dataDelete.title,
     body: dataDelete.body
    }

    this.updatePost(this.idPost, post);

  }



}
