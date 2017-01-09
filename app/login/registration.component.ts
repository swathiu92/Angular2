import { Component, OnInit } from '@angular/core';
import { Users } from '../data/users'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe-services';

@Component({
    templateUrl: 'app/login/registration.component.html',
    styleUrls: ['app/css/common.css', 'app/css/login-registration.css']
})

export class 	RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
	countries: any[];
  pageTitle: string = 'Registration';
  submitted: boolean = false;
  model: Users{};
	genders: any[] = ["Male", "Female"];
  constructor(private _route: ActivatedRoute, private _router: Router, private fb: FormBuilder, private _recipeService: RecipeService) {
    this.registrationForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
			'gender':[null, Validators.required],
      'email': [null, Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
      'username': [null, Validators.required],
      'password': [null, Validators.required],
			'confirmPassword': [null,Validators.required],
			'country': [null, Validators.required]
    })
  }
  
	ngOnInit(): void {
	  this._recipeService.getCountries()
		    .subscribe(data => this.countries = data);	
	}
	
  changeUsername(value: string, modelname: string)  {
    if(value && value.length > 0) {
      this.model[modelname] = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model[modelname] = value;
    }
  }

  registrationSubmit(isValid:boolean): void {
    this.submitted = true;
    if(isValid && (this.model.password === this.model.confirmPassword)) {
      this._router.navigate(['/login'],{ queryParams: { registered:'true'}})
    }
  }
}


