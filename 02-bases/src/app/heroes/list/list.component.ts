import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public listHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroInfo?: string;

  removeLastHero(): void {
    this.heroInfo = this.listHeroes.pop();
  }
}
