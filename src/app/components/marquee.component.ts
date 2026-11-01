import { Component } from '@angular/core';
import { MARQUEE } from '../data/site';

@Component({
  selector: 'app-marquee',
  template: `
    <div class="marquee" aria-hidden="true">
      <div class="track">
        @for (n of [0, 1]; track n) {
          <div class="group">
            @for (t of items; track $index) {
              <span>{{ t }}</span><i>✦</i>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .marquee {
      overflow: hidden;
      padding: 22px 0;
      border-block: 1px solid var(--line);
      background: #0e1013;
    }
    .track { display: flex; width: max-content; animation: scroll 40s linear infinite; }
    .marquee:hover .track { animation-play-state: paused; }
    .group { display: flex; align-items: center; gap: 36px; padding-right: 36px; }
    span {
      font-family: var(--ff-display);
      font-size: clamp(22px, 2.4vw, 34px);
      font-style: italic;
      white-space: nowrap;
      color: rgba(243, 237, 228, 0.8);
    }
    i { font-style: normal; color: var(--copper); font-size: 14px; }
    @keyframes scroll { to { transform: translateX(-50%); } }
  `,
})
export class MarqueeComponent {
  protected readonly items = MARQUEE;
}
