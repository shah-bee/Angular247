import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[] = [];
  constructor() { 
    
    this.Ingredients.push(new Ingredient("Apple", 2));
    this.Ingredients.push(new Ingredient("Oranges", 2));
    console.log(this.Ingredients);
  }

  ngOnInit() {
  }

  addNewIngredient(item: Ingredient){
    this.Ingredients.push(item);
  }
}
