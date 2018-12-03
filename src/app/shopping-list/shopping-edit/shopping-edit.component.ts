import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIgredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('inputName') inputNameEl : ElementRef;
  @ViewChild('inputAmount') inputAmountEl : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  Add(){
   this.newIgredientAdded.emit(
    new Ingredient(this.inputNameEl.nativeElement.value,this.inputAmountEl.nativeElement.value));
  }
}
