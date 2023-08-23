import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeveloperComponent } from './developer/developer.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Math1Component } from './math1/math1.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'myhome', component:HomeComponent },
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
   {path:'maths',component:OperationsComponent},
  { path: 'details/:empId/:empName', component:EmployeeDetailsComponent}, //empId is registered variable, holds the value of route
  { path:'employees/showemployees', 
    component:EmployeeComponent,
    children:[
      { path: 'developers', component:DeveloperComponent},
      { path : 'trainers', component:TrainerComponent}
    ]
  },
  { path:'', component:HomeComponent },
  {path:'**', component:/*PageNotFoundComponent */}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
