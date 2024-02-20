import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 32;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): string {
    this.name = this.name === 'spiderman' ? 'ironman' : 'spiderman';

    return this.name;
  }

  changeAge(): number {
    this.age = this.age === 23 ? 32 : 23;

    return this.age;
  }
}
