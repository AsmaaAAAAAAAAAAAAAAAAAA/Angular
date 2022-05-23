import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SiderbarComponent } from './Components/siderbar/siderbar.component';
import { HomeComponent } from './Components/home/home.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { UserRegisterComponent } from './Components/Register/user-register.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    HomeComponent,
    LightBoxDirective,
    NotFoundComponent,
    MainLayoutComponent,
    UserRegisterComponent,
    LoginComponent,
    LogoutComponent,
    AddPatientComponent,
    AddAppointmentComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    
    
  ],
  providers: [
    // ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
