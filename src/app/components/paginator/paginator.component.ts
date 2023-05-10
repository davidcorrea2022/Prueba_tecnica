import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {



  @Input()
  currentPage:number = 0;

  @Input()
  posts: Post[] = [];

  @Input()
  arrPosts: any[] = [];

  @Output()
  onPosts: EventEmitter<any> = new EventEmitter();

  currentPagePaginator:number = 0;
  postsPaginator: Post[] = [];
  arrPostsPaginator: any[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  tooglePaginador(toogle: boolean) {
    if (toogle) {
      this.currentPage = this.currentPage + 1;
      this.posts = this.arrPosts[this.currentPage]
      this.onPosts.emit(this.posts);
    } else {
      this.currentPage = this.currentPage - 1;
      this.posts = this.arrPosts[this.currentPage]
      this.onPosts.emit(this.posts);
    }
  }



}
