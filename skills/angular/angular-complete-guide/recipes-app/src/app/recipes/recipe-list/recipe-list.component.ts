import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('A Test Recipe', 'simply a test', 'https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-foo' +
    'd-lab-35-1500x1125.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
