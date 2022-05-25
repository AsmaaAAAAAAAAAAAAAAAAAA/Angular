import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from 'src/app/Models/iuser';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginFormGroup: FormGroup;
  Users: IUser[] = []
     
  constructor(private fb: FormBuilder
             ,private translate: TranslateService) {
    this.userLoginFormGroup = fb.group({
      email: [''],
      password: [''],
    },);
   }
   useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {
  }
  CheckRegisteration(email:string,password:string)
  {
    this.Users= JSON.parse((localStorage.getItem("Login-data")) as any);
    this.Users.forEach(item =>{
       if(email==item.email&&password==item.password)
       {
           alert("sucess Login")
       }
       else
       {
         alert("Please enter Valid Email or Password")
       }
      });
  }
}
