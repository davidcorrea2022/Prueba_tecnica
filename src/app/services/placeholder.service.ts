import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PlaceholderService {

  private baseUrl:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http:HttpClient ) { }

  getAllPosts( ):Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map( ( post:Post[] ) => {
        const size = Math.round(post.length / 10);
        let arrPostPaginator: any[] = [];
        for ( let i = 0; i <= post.length; i += size){
          const arrSlice = post.slice(i, i + size);
          if( arrSlice.length != 0 ){
            arrPostPaginator.push( arrSlice )
          }
        }
        return arrPostPaginator;
      } )
    )
  }

  deletePost ( id:number ){
    const url:string = `${this.baseUrl}/${id}`;
    return this.http.delete( url );
  }

  updatePost ( id:number, body:any ) {
    const url:string = `${this.baseUrl}/${id}`;
    const headers:HttpHeaders = new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8');
    return this.http.put( url, body, {headers} );
  }

  createPost(body:any) {
    const headers:HttpHeaders = new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8');
    return this.http.post( this.baseUrl, body, {headers} )
  }

}
