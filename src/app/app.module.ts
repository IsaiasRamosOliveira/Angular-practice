import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './patterns/header/header.component';
import { AsideComponent } from './patterns/aside/aside.component';
import { ContentComponent } from './patterns/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    LoginComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
