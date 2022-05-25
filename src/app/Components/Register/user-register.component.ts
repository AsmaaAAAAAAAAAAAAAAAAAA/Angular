import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { UserRegister } from 'src/app/Models/user-register';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  UserRegisterList: UserRegister[] = []
  userRegisterFormGroup: FormGroup;
  constructor(private fb: FormBuilder
           ,private router:Router
           ,private translate: TranslateService) {
    this.userRegisterFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      password: [''],
      confirmPassword: [''],

    }, { validators: passwordMatchValidator });

  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  ngOnInit(): void {

  }

  get name() {
    return this.userRegisterFormGroup.controls['name'];
  }
  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }

  get confirmPassword() {
    return this.userRegisterFormGroup.controls['confirmPassword'];
  }
  register() {
    this.UserRegisterList= JSON.parse((localStorage.getItem("Register-data")) as any);
    this.UserRegisterList.push(this.userRegisterFormGroup.value)
    localStorage.setItem('Register-data', JSON.stringify(this.UserRegisterList));
    this.router.navigate(['/Home']);
    
  }

}
