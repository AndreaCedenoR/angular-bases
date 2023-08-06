import { Component } from "@angular/core";






@Component({
  selector: 'app-counter',
  template:`

  <p>Counter: {{counter}}</p>

    <button (click)="increaseBy('suma')">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseBy('resta')">-1</button>


  `
})

export class CounterComponent{
  public counter: number = 2;
  increaseBy(accion: string): void{
    if(accion==='suma'){
      this.counter+=1;
    }
    else{
      this.counter-=1;
    }
  }


  resetValue():void{
    this.counter=2;
  }

}
