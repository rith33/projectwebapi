import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CanMainpageComponent } from './can-mainpage/can-mainpage.component';
import { EmpMainpageComponent } from './emp-mainpage/emp-mainpage.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditempComponent } from './editemp/editemp.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { EditjobComponent } from './editjob/editjob.component';
import { MyappComponent } from './myapp/myapp.component';
import { MyjobComponent } from './myjob/myjob.component';
import { AppdetailComponent } from './appdetail/appdetail.component';
import { LogcanComponent }from './logcan/logcan.component';
import { LogempComponent } from "./logemp/logemp.component";
import { RegcanComponent } from './regcan/regcan.component';
import { RegempComponent } from './regemp/regemp.component';


const routes: Routes = [
 {path: 'about', component: AboutComponent},
 {path: '', component: HomeComponent},
 {path: 'candidate', component: CanMainpageComponent},
 {path: 'employer', component: EmpMainpageComponent},
 {path: 'profilecan', component: EditproComponent},
 {path: 'profileemp', component: EditempComponent},
 {path: 'createjob', component: CreatejobComponent},
 {path: 'editjob', component: EditjobComponent},
 {path: 'myapp', component: MyappComponent},
 {path: 'myjob', component: MyjobComponent},
 {path: 'appdel', component: AppdetailComponent},
 {path: 'logcan', component: LogcanComponent},
 {path: 'logemp', component: LogempComponent},
 {path: 'regcan', component: RegcanComponent},
 {path: 'regemp', component: RegempComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
