import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';

const myRoute: Routes=[
  {path:"",
  component:AddEmpComponent
  },
  {path:"view",
  component:ViewAllEmpComponent
  },
  {path:"search",
  component:SearchEmpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ViewAllEmpComponent,
    NavbarComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
