import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import {ReactiveFormsModule} from '@angular/forms'
import {AuthGuard} from "./login/authguard"
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
