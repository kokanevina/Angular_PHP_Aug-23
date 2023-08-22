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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
