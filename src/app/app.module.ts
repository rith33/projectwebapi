import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CanMainpageComponent } from './can-mainpage/can-mainpage.component';
import { EmpMainpageComponent } from './emp-mainpage/emp-mainpage.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditproComponent } from './editpro/editpro.component';
import { EditempComponent } from './editemp/editemp.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { MyappComponent } from './myapp/myapp.component';
import { MyjobComponent } from './myjob/myjob.component';
import { AppdetailComponent } from './appdetail/appdetail.component';
import { LogcanComponent } from './logcan/logcan.component';
import { LogempComponent } from './logemp/logemp.component';
import { RegcanComponent } from './regcan/regcan.component';
import { RegempComponent } from './regemp/regemp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CanMainpageComponent,
    EditempComponent,
    CreatejobComponent,
    EditjobComponent,
    EmpMainpageComponent,
    HomeComponent,
    EditproComponent,
    EditempComponent,
    CreatejobComponent,
    EditjobComponent,
    MyappComponent,
    MyjobComponent,
    AppdetailComponent,
    LogcanComponent,
    LogempComponent,
    RegcanComponent,
    RegempComponent,
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
