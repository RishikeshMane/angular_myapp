import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component  {
  
  // Inject Router Dependency
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  // Fires on button click
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/postdata']);
  }
  getuserdata(data:any){
    console.log(data);
        
  }
  
}
