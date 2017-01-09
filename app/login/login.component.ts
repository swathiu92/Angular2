import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/css/login-registration.css', 'app/css/common.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  pageTitle: string = 'Login';
  username: string;
  password: string;
  submitted: boolean = false;
  registered: boolean = false;
  loginFailed: boolean = false;
  model: any = {};


  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router) {
    if(this._route.snapshot.queryParams['registered']) {
      this.registered = true;
    }
    this.loginForm = fb.group({
      'username' : [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])]
    })
  }



 loginSubmit(loginDetails: any[], isValid: boolean): void {
   this.registered = false;
   this.submitted = true;
   if(isValid) {
     this.submitted = false;
     if(loginDetails.username === 'user' && loginDetails.password === 'user'){
     this._router.navigate(['/recipes-home'])
     this.loginFailed = false;
   } else {
     this.loginFailed = true;
   }
   }
 }
 }


