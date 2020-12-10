import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
