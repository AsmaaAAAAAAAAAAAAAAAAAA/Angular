import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/Models/ipatient';
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  PatientList: IPatient[] = []

  constructor() { }

  ngOnInit(): void {
    
    this.PatientList = JSON.parse((localStorage.getItem("Patientform-data")) as any);

  }

}
