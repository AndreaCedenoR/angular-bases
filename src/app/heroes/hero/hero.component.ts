import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string='ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  heroDescription(): string{
    return `${this.name}-${this.age}`;
  }

  changeHero(name: string): void{
    if(name==='ironman'){
      this.name='Spiderman';
    }else{
      this.name='ironman';
    }

  }
  changeAge(age: number): void{
    if(age===45){
      this.age=25
    }else{
      this.age=45
    }
  }
}
