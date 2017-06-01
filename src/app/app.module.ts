import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/animations';


import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
