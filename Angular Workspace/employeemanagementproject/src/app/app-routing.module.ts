import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeveloperComponent } from './developer/developer.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'myhome', component:HomeComponent },
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'employees/showemployees', 
    component:EmployeeComponent,
    children:[
      { path: 'developers', component:DeveloperComponent},
      { path : 'trainers', component:TrainerComponent}
    ]
  },
  { path:'', component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
