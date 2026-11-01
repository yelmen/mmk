import { Component, inject, signal } from '@angular/core';
import { QuoteService } from '../shared/quote.service';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-materials',
  imports: [RevealDirective],
  template: `
    <section class="section materials" id="malzeme">
      <div class="container">
        <header class="head" reveal="none">
          <p class="eyebrow">Malzeme & Yüzey</p>
          <h2 class="display h-lg">
            <span class="line"><span>İki karakter,</span></span>
            <span class="line"><span style="--rd: 0.12s">tek <span class="accent">duruş</span>.</span></span>
          </h2>
        </header>

        <div class="panels" reveal="up" [delay]="150">
          @for (m of mats; track m.key; let i = $index) {
            <button
              class="panel"
              [class.active]="active() === i"
              (mouseenter)="active.set(i)"
              (focus)="active.set(i)"
              (click)="show(m.finish)"
              [attr.aria-label]="m.title + ' modellerini gör'"
            >
              <img [src]="m.img" [alt]="m.title" loading="lazy" />
              <span class="shade"></span>
              <span class="meta">
                <small>{{ m.sub }}</small>
                <span class="cta">
                  {{ m.cta }}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </span>
            </button>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .materials { background: var(--bg-2); }
    .head { margin-bottom: clamp(36px, 5vw, 64px); h2 { margin-top: 22px; } }
    .panels { display: flex; gap: 14px; height: clamp(420px, 62vw, 640px); }
    .panel {
      position: relative;
      flex: 1;
      overflow: hidden;
      border-radius: 24px;
      text-align: left;
      transition: flex 0.9s var(--ease);
      border: 1px solid var(--line);
    }
    .panel.active { flex: 2.2; }
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 40% 50%;
      transition: transform 1.4s var(--ease);
    }
    .panel:hover img, .panel.active img { transform: scale(1.06); }
    .shade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.7)); }
    .meta {
      position: absolute;
      left: 26px;
      right: 26px;
      bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;
      small { max-width: 30ch; font-size: 14px; line-height: 1.5; color: rgba(243, 237, 228, 0.85); }
    }
    .cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      padding: 10px 18px;
      border-radius: 100px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      background: rgba(11, 12, 14, 0.55);
      border: 1px solid rgba(243, 237, 228, 0.3);
      backdrop-filter: blur(8px);
      transition: all 0.4s var(--ease);
      svg { width: 14px; height: 14px; }
    }
    .panel:hover .cta { background: var(--copper); color: #111; border-color: var(--copper); }

    @media (max-width: 800px) {
      .panels { flex-direction: column; height: auto; }
      .panel, .panel.active { flex: none; height: 300px; }
      .meta { flex-direction: column; align-items: flex-start; }
    }
  `,
})
export class MaterialsComponent {
  private readonly quote = inject(QuoteService);
  private readonly scroller = inject(ScrollService);

  protected readonly active = signal(0);
  protected readonly mats = [
    {
      key: 'ceviz',
      title: 'Ceviz. Antrasit.',
      img: 'assets/scenes/ceviz-antrasit.webp',
      sub: 'Doğal ceviz damarlarının sıcaklığı, antrasit metalin güçlü zarafetiyle buluşur.',
      cta: 'Ceviz modelleri',
      finish: 'Ceviz & Antrasit',
    },
    {
      key: 'gri',
      title: 'Gri. Antrasit.',
      img: 'assets/scenes/gri-antrasit.webp',
      sub: 'Mat antrasit yüzeyler ve gri tonlar; minimal ve zamana dirençli bir duruş.',
      cta: 'Gri modeller',
      finish: 'Gri & Antrasit',
    },
  ];

  protected show(finish: string): void {
    this.quote.finishRequest.set(null);
    queueMicrotask(() => this.quote.finishRequest.set(finish));
    this.scroller.to('koleksiyon');
  }
}
