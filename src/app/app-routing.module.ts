import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { FormComponent } from './form/form.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  { path: 'postdata', component: FormComponent },
  { path: 'getdata', component: ViewdataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
