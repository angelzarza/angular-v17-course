import {Component} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    console.log(this.character);
  }
}
