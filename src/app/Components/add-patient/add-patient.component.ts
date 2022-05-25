import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { IPatient } from 'src/app/Models/ipatient';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  PatientList: IPatient[] = []
  PatientEmail: string = ''
  Patient: IPatient[] = []
  dataSource: IPatient[] = []
 newPatient: IPatient = {} as IPatient;
    
  NewPatienFormGroup: FormGroup;
  constructor(private fb: FormBuilder
    , private router: Router
    , private route: ActivatedRoute
    ,private translate: TranslateService) {
    this.NewPatienFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      age: [''],
      History: [''],
      complaint: ['']
    });
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('email')!='0'){
      this.PatientEmail = params.get('email') !;
      this.EditPatient(this.PatientEmail)
      this.NewPatienFormGroup.setValue({
        name: this.newPatient.name, age: this.newPatient.age, email: this.newPatient.email
        ,complaint: this.newPatient.complaint, History: this.newPatient.History
      });
    }
   
    })
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
    this.route.paramMap.subscribe(params => {
    if(params.get('email')=='0'){
    this.PatientList = JSON.parse((localStorage.getItem("Patientform-data")) || '[]');
    this.PatientList.push(this.NewPatienFormGroup.value)
    localStorage.setItem('Patientform-data', JSON.stringify(this.PatientList))
    console.log(this.PatientList );
    this.router.navigate(['/Patients']);
   
    }
    else
    {
      let Patients: IPatient[] =JSON.parse(localStorage.getItem("Patientform-data")!);
      var index=Patients.findIndex(p=>p.email==this.PatientEmail);
      Patients.splice(index,1);
      Patients.push(this.NewPatienFormGroup.value);
      localStorage.setItem('Patientform-data', JSON.stringify(Patients))
      this.router.navigate(['/Patients']);
     
    }
                     
  });
  }
  EditPatient(email: string) {
    if(localStorage.getItem("Patientform-data")!=null){
    this.dataSource = JSON.parse(localStorage.getItem("Patientform-data")!);
    var index= this.dataSource.findIndex(p=>p.email==this.PatientEmail);
    this.newPatient=this.dataSource[index];
    
  }

}
}
