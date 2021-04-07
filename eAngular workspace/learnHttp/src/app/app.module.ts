import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './SimpleHttp/simple-http/simple-http.component';
import { HttpClientModule } from '@angular/common/http';
import { youTubeSearchInjectables } from './youtube/YoutubeSearch/youtube-search-injectables';
import { SearchBoxComponent } from './youtube/SearchBoxComponent/search-box/search-box.component';
import { SearchResultsComponent } from './youtube/SearchResultsComponent/search-results/search-results.component';
import { PostRequestComponent } from './MoreHttp/post-request/post-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    PostRequestComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
