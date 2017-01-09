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
const recipe_services_1 = require('../services/recipe-services');
const router_1 = require('@angular/router');
let SelectedRecipeComponent = class SelectedRecipeComponent {
    constructor(_route, _router, _recipeService) {
        this._route = _route;
        this._router = _router;
        this._recipeService = _recipeService;
    }
    goBack() {
        this._router.navigate(['/' + this._route.snapshot.params['recipeType']]);
    }
    ngOnInit() {
        this.recipeType = this._route.snapshot.params['recipeType'];
        let recipeName = this._route.snapshot.params['recipeName'];
        this._recipeService.getSelectedRecipe(this.recipeType, recipeName)
            .subscribe(data => this.selectedRecipe = data);
    }
};
SelectedRecipeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/recipes/selected-recipe.component.html',
        styleUrls: ['app/css/courses.css', 'app/css/common.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, recipe_services_1.RecipeService])
], SelectedRecipeComponent);
exports.SelectedRecipeComponent = SelectedRecipeComponent;
//# sourceMappingURL=selected-recipe.component.js.map