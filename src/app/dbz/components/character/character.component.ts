import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();

  public character: Character ={
    name: '',
    power: 0,
  };

  limpiar():void{
    this.character.name='';
    this.character.power=0;
  }

  emitCharacter(): void{
    console.log('emitiendo el caracter:',this.character);

    if(this.character.name.length===0 ) return;

    this.onNewCharacter.emit(this.character);

    // this.limpiar()


  }



}
