import { Component, signal } from '@angular/core';
import { LAYERS } from '../data/site';
import { CounterDirective } from '../shared/counter.directive';
import { RevealDirective } from '../shared/reveal.directive';
import { TiltDirective } from '../shared/tilt.directive';

@Component({
  selector: 'app-technology',
  imports: [RevealDirective, CounterDirective, TiltDirective],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  protected readonly layers = LAYERS;
  protected readonly active = signal(3);

  protected readonly numbers = [
    { v: 2, s: ' mm', l: 'DKP sac kasa' },
    { v: 1.2, s: ' mm', l: 'DKP sac kanat' },
    { v: 1, s: ' mm', l: 'Yekpare takviye sac' },
    { v: 150, s: '', l: 'Dansite cam yünü' },
  ];

  protected select(i: number): void {
    this.active.set(i);
  }
}
