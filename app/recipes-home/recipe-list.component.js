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
let RecipeListComponent = class RecipeListComponent {
    constructor(_recipeService) {
        this._recipeService = _recipeService;
        this.countTitles = {};
    }
    setCountData(data) {
        this.recipeCount = data;
        this.countTitles.appetizers = data.appetizers.vegetarian + ' veg appetizers ' + data.appetizers.vegetarian + ' non veg appetizers';
        this.countTitles.entrees = data.entrees.vegetarian + ' veg entrees ' + data.entrees.vegetarian + ' non veg entrees';
        this.countTitles.desserts = data.desserts.vegetarian + ' veg desserts ' + data.desserts.vegetarian + ' non veg desserts';
    }
    ngOnInit() {
        this._recipeService.getRecipesCount()
            .subscribe(data => this.setCountData(data));
    }
};
RecipeListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/recipes-home/recipe-list.component.html',
        styleUrls: ['app/css/common.css']
    }), 
    __metadata('design:paramtypes', [recipe_services_1.RecipeService])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map