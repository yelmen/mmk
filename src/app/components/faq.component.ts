import { Component, signal } from '@angular/core';
import { FAQS } from '../data/site';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-faq',
  imports: [RevealDirective],
  template: `
    <section class="section faq" id="sss">
      <div class="container grid">
        <header reveal="none">
          <p class="eyebrow">Sıkça Sorulan Sorular</p>
          <h2 class="display h-lg">
            <span class="line"><span>Her katmanında</span></span>
            <span class="line"><span style="--rd: 0.12s"><span class="accent">koruma</span> var.</span></span>
          </h2>
          <p class="lead">Üretim, malzeme ve güvenlik hakkında merak ettikleriniz.</p>
        </header>

        <div class="list" reveal="up" [delay]="120">
          @for (f of faqs; track f.q; let i = $index) {
            <div class="row" [class.open]="open() === i">
              <button (click)="toggle(i)" [attr.aria-expanded]="open() === i">
                <span class="q">{{ f.q }}</span>
                <span class="icon" aria-hidden="true"></span>
              </button>
              <div class="a"><p>{{ f.a }}</p></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    :host { display: block; }
    .faq { background: var(--bg-2); }
    .grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(30px, 6vw, 100px); align-items: start; }
    header { position: sticky; top: 120px; h2 { margin: 22px 0 22px; } }
    .list { border-top: 1px solid var(--line); }
    .row { border-bottom: 1px solid var(--line); }
    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      padding: 28px 0;
      text-align: left;
    }
    .q { font-family: var(--ff-display); font-size: clamp(21px, 2vw, 28px); line-height: 1.25; transition: color 0.4s; }
    .row:hover .q, .row.open .q { color: var(--copper-2); }
    .icon {
      position: relative;
      flex: none;
      width: 44px;
      height: 44px;
      border: 1px solid var(--line);
      border-radius: 50%;
      transition: all 0.5s var(--ease);
      &::before, &::after { content: ''; position: absolute; left: 14px; right: 14px; top: 21.5px; height: 1px; background: var(--ink); transition: transform 0.5s var(--ease); }
      &::after { transform: rotate(90deg); }
    }
    .open .icon { background: var(--copper); border-color: var(--copper); &::before, &::after { background: #111; } &::after { transform: rotate(0); } }
    .a {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.7s var(--ease);
      p { overflow: hidden; color: rgba(243, 237, 228, 0.72); max-width: 62ch; padding-right: 60px; }
    }
    .open .a { grid-template-rows: 1fr; p { padding-bottom: 30px; } }

    @media (max-width: 900px) {
      .grid { grid-template-columns: 1fr; }
      header { position: static; }
      .a p { padding-right: 0; }
    }
  `,
})
export class FaqComponent {
  protected readonly faqs = FAQS;
  protected readonly open = signal(0);

  protected toggle(i: number): void {
    this.open.update((v) => (v === i ? -1 : i));
  }
}
