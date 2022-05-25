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
import { AppMaterialModule } from './MaterialMode';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { UserAppointmentComponent } from './Components/user-appointment/user-appointment.component';
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
    PatientsComponent,
    AppointmentsComponent,
    UserAppointmentComponent
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
    AppMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
  ],
  providers: [
    // ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}