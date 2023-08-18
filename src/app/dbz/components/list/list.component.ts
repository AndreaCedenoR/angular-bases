import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string | undefined>= new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  // onDeleteId()=index value: number

  deleteCharacterById(id:string|undefined):void{
    if(id===undefined)return;
    this.onDelete.emit(id);
    //emitir id
    console.log({id})
  }

}
