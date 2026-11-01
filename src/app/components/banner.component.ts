import { Component, inject } from '@angular/core';
import { ParallaxDirective } from '../shared/parallax.directive';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-banner',
  imports: [ParallaxDirective, RevealDirective],
  template: `
    <section class="banner" aria-label="Industrial Elegance">
      <div class="img">
        <img parallax [speed]="0.12" src="assets/scenes/hero.webp" alt="Ceviz ve antrasit çelik kapı, Natura Guard" />
      </div>
      <div class="container wrap">
        <div class="copy" reveal="none">
          <p class="eyebrow">Design Collection · 2026</p>
          <h2 class="display h-lg">
            <span class="line"><span>Industrial</span></span>
            <span class="line"><span style="--rd: 0.12s"><span class="accent">Elegance</span></span></span>
          </h2>
          <p class="text">Doğal sıcaklık. Endüstriyel güç. Modern mimarinin giriş kapısı.</p>
          <a href="#malzeme" class="btn btn-dark" (click)="go($event)">
            Malzemeleri Keşfet
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .banner {
      position: relative;
      min-height: min(88svh, 820px);
      display: flex;
      align-items: center;
      overflow: hidden;
      background: #e4e1dc;
      color: var(--ink-dark);
    }
    .img { position: absolute; inset: 0; overflow: hidden; }
    img {
      position: absolute;
      inset: -8% 0;
      width: 100%;
      height: 116%;
      object-fit: cover;
      object-position: 70% 50%;
      transform: translate3d(0, var(--py, 0px), 0);
    }
    .wrap { position: relative; z-index: 2; }
    .copy { max-width: 560px; }
    .eyebrow { color: #8a5632; }
    h2 { margin: 24px 0; color: var(--ink-dark); }
    .accent { color: #8a5632; }
    .text { font-size: 18px; color: #3d3f42; max-width: 36ch; margin-bottom: 34px; }
    .btn-dark { background: var(--ink-dark); color: #fff; &::before { background: #8a5632; } &:hover { color: #fff; } }

    @media (max-width: 800px) {
      .banner { align-items: flex-start; min-height: 0; padding: 70px 0 min(100vw, 520px); }
      img { object-position: 78% 100%; inset: auto 0 0 0; height: min(100vw, 520px); }
      .img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, #e4e1dc 30%, transparent 62%); }
    }
  `,
})
export class BannerComponent {
  private readonly scroller = inject(ScrollService);
  go(ev: Event): void {
    this.scroller.to('malzeme', ev);
  }
}
