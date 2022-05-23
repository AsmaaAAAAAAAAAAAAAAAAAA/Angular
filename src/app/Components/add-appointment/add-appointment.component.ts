import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatient } from 'src/app/Models/ipatient';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {
  AppointmentList: IPatient[] = []
  NewAppointmentFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.NewAppointmentFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3),]],
      email: [''],
      telephone:[''],
      age:[''],
    });
  }
  ngOnInit(): void {
  }
  get name() {
    return this.NewAppointmentFormGroup.controls['name'];
  }
  get email() {
    return this.NewAppointmentFormGroup.controls['email'];
  }
  get telephone() {
    return this.NewAppointmentFormGroup.controls['telephone'];
  }
  get age() {
    return this.NewAppointmentFormGroup.controls['age'];
  }

  AddAppointment() {
    
    this.AppointmentList.push(this.NewAppointmentFormGroup.value)
    localStorage.setItem('Appointmenform-data', JSON.stringify(this.NewAppointmentFormGroup.value));
  }

}

