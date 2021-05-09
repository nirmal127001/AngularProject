import { Component, OnInit } from '@angular/core';
import {Recipe} from 'src/app/recipes/recipe.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Paneer Kadhai','This is simply a test','https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
