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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const app_component_1 = require('./app.component');
const http_1 = require('@angular/http');
const welcome_component_1 = require('./home/welcome.component');
const login_component_1 = require('./login/login.component');
const registration_component_1 = require('./login/registration.component');
const recipe_home_component_1 = require('./recipes-home/recipe-home.component');
const appetizer_recipes_component_1 = require('./recipes/appetizer-recipes.component');
const dessert_recipes_component_1 = require('./recipes/dessert-recipes.component');
const entree_recipes_component_1 = require('./recipes/entree-recipes.component');
const selected_recipe_component_1 = require('./recipes/selected-recipe.component');
const recipe_list_component_1 = require('./recipes-home/recipe-list.component');
const recipe_services_1 = require('./services/recipe-services');
const carousel_1 = require('./shared/carousel');
const course_details_1 = require('./shared/course-details');
const route_1 = require('./route');
const recipe_filter_pipe_1 = require('./filters/recipe-filter.pipe');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule, route_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, recipe_home_component_1.RecipeComponent, carousel_1.CarouselComponent, course_details_1.CourseDetails, recipe_list_component_1.RecipeListComponent, appetizer_recipes_component_1.AppetizerComponent, entree_recipes_component_1.EntreeComponent, dessert_recipes_component_1.DessertComponent, selected_recipe_component_1.SelectedRecipeComponent, recipe_filter_pipe_1.RecipeFilterPipe],
        providers: [recipe_services_1.RecipeService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map