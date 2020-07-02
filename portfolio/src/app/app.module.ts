import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, IntroComponent, AboutComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
