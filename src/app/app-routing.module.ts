import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './Components/add-appointment/add-appointment.component';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { UserRegisterComponent } from './Components/Register/user-register.component';
import { UserAuthGuard } from './Guards/user-auth.guard';

const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Patients', component:PatientsComponent},
    {path:'NewPatient', component:AddPatientComponent},
    {path:'NewAppointment', component:AddAppointmentComponent}
  ]},
  {path: 'Register', component:UserRegisterComponent},
  {path: 'login', component:LoginComponent},

  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
