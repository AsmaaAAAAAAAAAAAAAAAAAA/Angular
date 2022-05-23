import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { IPatient } from 'src/app/Models/ipatient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  PatientList: IPatient[] = []
  NewPatienFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.NewPatienFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      age: [''],
      History:[''],
      complaint:['']
    });
  }
  ngOnInit(): void {
  }
  get name() {
    return this.NewPatienFormGroup.controls['name'];
  }
  get age() {
    return this.NewPatienFormGroup.controls['age'];
  }
  get email() {
    return this.NewPatienFormGroup.controls['email'];
  }
  get complaint() {
    return this.NewPatienFormGroup.controls['complaint'];
  }
  get History() {
    return this.NewPatienFormGroup.controls['History'];
  }
  AddPatient() {
    this.PatientList.push(this.NewPatienFormGroup.value)
    localStorage.setItem('Patientform-data', JSON.stringify(this.PatientList));
  }

}
