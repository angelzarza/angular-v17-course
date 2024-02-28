import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  public counter: number = 20;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }
}
