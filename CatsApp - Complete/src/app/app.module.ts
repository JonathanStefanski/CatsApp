import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CatData } from './cats/cat-data';

import { AppRoutingModule } from "./app-routing.module";
import { CatsModule } from "./cats/cat.module";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { Page404Component } from "./page-404.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,   
    InMemoryWebApiModule.forRoot(CatData, { delay: .500 }),
    CatsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
