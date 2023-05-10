import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { PublishPostComponent } from './pages/publish-post/publish-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    ListPostsComponent,
    PaginatorComponent,
    NotificationComponent,
    ModalUpdateComponent,
    ModalCreateComponent,
    PublishPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
