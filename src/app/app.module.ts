import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { FormComponent } from './form/form.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: 'postdata', component: FormComponent },
//   { path: 'getdata', component: ViewdataComponent },
// ];

@NgModule({
  declarations: [AppComponent,
    ViewdataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ C1Component,FormComponent,
    ViewdataComponent],
})
export class AppModule {}
