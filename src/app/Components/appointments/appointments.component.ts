import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/Models/ipatient';
import { MatTableDataSource } from "@angular/material/table";
import { IAppointment } from 'src/app/Models/iappointment';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  PatientList: IAppointment[] = []
  PatientEmail: string = ''


  public displayedColumns = ['patientName', 'checkUPDate', 'email', 'telephone', 'Edit', 'Delete'];
  public dataSource = new MatTableDataSource<IAppointment>();
  constructor(private route: ActivatedRoute
    , private router: Router
    , private translate: TranslateService) { }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {
    this.getApponitmentsInformation();
    this.route.paramMap.subscribe(params => {
      if (params.get('email') != '0') {
        this.PatientEmail = params.get('email')!;
      }
    });
  }
  getApponitmentsInformation() {

    this.dataSource.data = JSON.parse((localStorage.getItem("Appointmenform-data")) as any);
  }
  Delete() {
    let Appointments: IPatient[] = JSON.parse(localStorage.getItem("Appointmenform-data")!);
    var index = Appointments.findIndex(p => p.email == this.PatientEmail);
    Appointments.splice(index, 1);
    localStorage.setItem("Appointmenform-data", JSON.stringify(Appointments))
    this.router.navigate(['/Appointments']);
  }

}