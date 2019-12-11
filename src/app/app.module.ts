import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
