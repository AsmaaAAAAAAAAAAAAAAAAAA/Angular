import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginFormGroup: FormGroup;
  Users: IUser[] = []
     
  constructor(private fb: FormBuilder) {
    this.userLoginFormGroup = fb.group({
      email: [''],
      password: [''],
      
     
    },);
   }
  ngOnInit(): void {
  }
  CheckRegisteration(email:string,password:string)
  {
    this.Users= JSON.parse((localStorage.getItem("form-data")) as any);
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
