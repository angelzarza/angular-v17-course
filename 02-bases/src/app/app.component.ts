import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Home';
  public counter: number = 20;

  increment(): void {
    this.counter++
  }

  decrement(): void {
    this.counter--
  }

  reset(): void {
    this.counter = 0
  }
}
