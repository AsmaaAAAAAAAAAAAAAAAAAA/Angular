import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/Models/ipatient';
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  PatientEmail: string = ''
  Patient: IPatient[] = []

  public displayedColumns = ['name', 'email', 'age', 'complaint', 'History', 'Edit', 'Delete'];
  public dataSource = new MatTableDataSource<IPatient>();
  constructor(private route: ActivatedRoute
    , private router: Router
    , private translate: TranslateService) { }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.getPatientInformation();
    this.route.paramMap.subscribe(params => {
      if (params.get('email') != '0') {
        this.PatientEmail = params.get('email')!;
      }
    });

  }
  getPatientInformation() {
    this.dataSource.data = JSON.parse((localStorage.getItem('Patientform-data')) as any);
    console.log(this.dataSource.data);

  }
  Delete() {
    let Patients: IPatient[] = JSON.parse(localStorage.getItem("Patientform-data")!);
    var index = Patients.findIndex(p => p.email == this.PatientEmail);
    Patients.splice(index, 1);
    localStorage.setItem('Patientform-data', JSON.stringify(Patients))
    this.router.navigate(['/Patients']);
  }


}
