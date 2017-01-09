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
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
let RecipeService = class RecipeService {
    constructor(_http) {
        this._http = _http;
    }
    getCarouselImages() {
        this._recipeUrl = 'api/courses/carousel.json';
        return this._http.get(this._recipeUrl)
            .map((res) => res.json())
            .catch(this.errorHandler);
    }
    getRecipes(recipeType) {
        this._recipeUrl = 'api/courses/' + recipeType + '.json';
        return this._http.get(this._recipeUrl)
            .map((res) => res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.errorHandler);
    }
    getSelectedRecipe(recipeType, recipeName) {
        this._recipeUrl = 'api/' + recipeType + '/' + recipeType + '_' + recipeName + '.json';
        return this._http.get(this._recipeUrl)
            .map((res) => res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.errorHandler);
    }
    getRecipesCount() {
        this._recipeUrl = 'api/courses/count.json';
        return this._http.get(this._recipeUrl)
            .map((res) => res.json())
            .catch(this.errorHandler);
    }
    getCountries() {
        this._recipeUrl = 'api/courses/countries.json';
        return this._http.get(this._recipeUrl)
            .map((res) => res.json())
            .catch(this.errorHandler);
    }
    errorHandler(error) {
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    }
};
RecipeService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe-services.js.map