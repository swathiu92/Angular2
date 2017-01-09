"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const forms_1 = require('@angular/forms');
let LoginComponent = class LoginComponent {
    constructor(fb, _route, _router) {
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Login';
        this.submitted = false;
        this.registered = false;
        this.loginFailed = false;
        this.model = {};
        if (this._route.snapshot.queryParams['registered']) {
            this.registered = true;
        }
        this.loginForm = fb.group({
            'username': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)])]
        });
    }
    loginSubmit(loginDetails, isValid) {
        this.registered = false;
        this.submitted = true;
        if (isValid) {
            this.submitted = false;
            if (loginDetails.username === 'user' && loginDetails.password === 'user') {
                this._router.navigate(['/recipes-home']);
                this.loginFailed = false;
            }
            else {
                this.loginFailed = true;
            }
        }
    }
};
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/login/login.component.html',
        styleUrls: ['app/css/login-registration.css', 'app/css/common.css']
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map