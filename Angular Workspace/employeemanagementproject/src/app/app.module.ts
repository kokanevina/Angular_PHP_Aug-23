import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { LengthPipe } from './pipes/length.pipe';
import { IndexPipe } from './pipes/index.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DeveloperComponent } from './developer/developer.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Math1Component } from './math1/math1.component';
import { Math2Component } from './math2/math2.component';
import { OperationsComponent } from './operations/operations.component';
import { MathsService } from './services/maths.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    EmployeeComponent,
    EmployeeCardComponent,
    LengthPipe,
    IndexPipe,
    OrderByPipe,
    RegisterComponent,
    LoginComponent,
    DeveloperComponent,
    TrainerComponent,
    EmployeeDetailsComponent,
    Math1Component,
    Math2Component,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule, HttpClientModule, 
    BrowserAnimationsModule, MatSlideToggleModule,
    MatButtonModule,MatDividerModule,MatIconModule,
    MatTooltipModule
  ],
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
