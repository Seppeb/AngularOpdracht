import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeeltereinenComponent } from './speeltereinen/speeltereinen.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeeltereinenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
