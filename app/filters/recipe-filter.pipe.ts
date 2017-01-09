import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})

export class RecipeFilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((recipeFilter: any[]) =>
            recipeFilter.recipe_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}