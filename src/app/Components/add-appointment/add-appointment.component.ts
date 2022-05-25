import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAppointment } from 'src/app/Models/iappointment';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  AppointmentList: IAppointment[] = []
  PatientEmail: string = ''
  newAppointment: IAppointment = {} as IAppointment;
  dataSource: IAppointment[] = []
  NewAppointmentFormGroup: FormGroup;
  constructor(private fb: FormBuilder
    , private router: Router
    , private route: ActivatedRoute
    ,private translate: TranslateService) {
    this.NewAppointmentFormGroup = fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3),]],
      email: [''],
      telephone: [''],
      checkUPDate: ['']
    });
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('email') != '0') {
        this.PatientEmail = params.get('email')!;
        this.EditAppointment(this.PatientEmail)
        this.NewAppointmentFormGroup.setValue({
          patientName: this.newAppointment.patientName, checkUPDate: this.newAppointment.checkUPDate, email: this.newAppointment.email
          ,complaint: this.newAppointment.telephone
        });
      }
    })
  }
  get patientName() {
    return this.NewAppointmentFormGroup.controls['patientName'];
  }
  get email() {
    return this.NewAppointmentFormGroup.controls['email'];
  }
  get telephone() {
    return this.NewAppointmentFormGroup.controls['telephone'];
  }
  get checkUPDate() {
    return this.NewAppointmentFormGroup.controls['checkUPDate'];
  }

  AddAppointment() {
    this.route.paramMap.subscribe(params => {
      if (params.get('email') == '0') {
        this.AppointmentList = JSON.parse((localStorage.getItem('Appointmenform-data')) || '[]');
        this.AppointmentList.push(this.NewAppointmentFormGroup.value)
        localStorage.setItem('Appointmenform-data', JSON.stringify(this.AppointmentList));
        this.router.navigate(['/Appointments']);
      }
      else {
        let Appointments: IAppointment[] = JSON.parse(localStorage.getItem('Appointmenform-data')!);
        var index = Appointments.findIndex(p => p.email == this.PatientEmail);
        Appointments.splice(index, 1);
        Appointments.push(this.NewAppointmentFormGroup.value);
        localStorage.setItem('Appointmenform-data', JSON.stringify(Appointments))
        this.router.navigate(['/Appointments']);

      }
    });
  }
  EditAppointment(email: string) {
    if (localStorage.getItem("Appointmenform-data") != null) {
      this.dataSource = JSON.parse(localStorage.getItem('Appointmenform-data')!);
      var index = this.dataSource.findIndex(p => p.email == this.PatientEmail);
      this.newAppointment = this.dataSource[index];
      console.log(this.newAppointment);

    }

  }

}

