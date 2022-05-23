import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/Custom Validators/PasswordmatchValidator';
import { forbiddenNameValidator } from 'src/app/Custom Validators/UserNameValidator';
import { IUserRegister } from 'src/app/Models/iuser-register';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  UserRegisterList: IUserRegister[] = []
  userRegisterFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegisterFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      password: [''],
      confirmPassword: [''],

    }, { validators: passwordMatchValidator });

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
    this.UserRegisterList.push(this.userRegisterFormGroup.value)
    localStorage.setItem('form-data', JSON.stringify(this.UserRegisterList));
    
  }

}
