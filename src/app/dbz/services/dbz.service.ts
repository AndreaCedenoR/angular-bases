import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    id: uuid(),
    power: 1000,
  }, {
    name: 'Goku',
    id: uuid(),
    power: 9500,
  },{
    name: 'Vegeta',
    id: uuid(),
    power: 7500
  }];

  addCharacter(character: Character): void{
    const newCharacter: Character={id: uuid(), ...character };
    console.log('recibiendo:', character)
    this.characters.push(character);
    console.log(this.characters);


  }

  deleteCharacterById(id:string|undefined){
    this.characters = this.characters.filter( character => character.id !== id);
  }

  // onDeleteCharacter(i:number):void{
  //   console.log('recibiendo el index: ', i)
  //   this.characters.splice(i,1);
  // }

}
