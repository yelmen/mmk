import { Component, inject } from '@angular/core';
import { COMPANY, NAV } from '../data/site';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="ft">
      <div class="container top">
        <div class="brand">
          <img src="assets/logo.png" alt="MMK Grup logosu" width="120" height="81" loading="lazy" />
          <p class="display">Industrial <span class="accent">Elegance</span></p>
        </div>

        <nav aria-label="Alt menü">
          @for (n of nav; track n.id) {
            <a [href]="'#' + n.id" (click)="go(n.id, $event)">{{ n.label }}</a>
          }
        </nav>

        <address>
          <p>{{ c.address }}</p>
          @for (p of c.phones; track p.href) {
            <a [href]="p.href">{{ p.label }}</a>
          }
          <a [href]="'mailto:' + c.email">{{ c.email }}</a>
        </address>
      </div>

      <div class="container bottom">
        <span>© {{ year }} {{ c.legal }} Tüm hakları saklıdır.</span>
        <button (click)="up()">Yukarı çık ↑</button>
      </div>
    </footer>
  `,
  styles: `
    .ft { background: #08090b; border-top: 1px solid var(--line); padding-top: clamp(56px, 7vw, 100px); }
    .top { display: grid; grid-template-columns: 1.3fr 0.7fr 1fr; gap: 40px; padding-bottom: 60px; }
    .brand img { width: 96px; margin-bottom: 18px; }
    .brand p { font-size: clamp(34px, 4vw, 58px); line-height: 1; }
    nav, address { display: grid; gap: 10px; align-content: start; font-style: normal; }
    nav a, address a { color: rgba(243, 237, 228, 0.78); transition: color 0.3s, transform 0.3s var(--ease); width: fit-content; &:hover { color: var(--copper-2); transform: translateX(4px); } }
    address p { color: var(--muted); font-size: 14px; max-width: 34ch; margin-bottom: 6px; }
    .bottom { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; padding: 24px 0 30px; border-top: 1px solid var(--line); font-size: 12px; color: var(--muted); button { letter-spacing: 0.16em; text-transform: uppercase; &:hover { color: var(--copper); } } }
    @media (max-width: 820px) { .top { grid-template-columns: 1fr; } }
  `,
})
export class FooterComponent {
  private readonly scroller = inject(ScrollService);
  protected readonly c = COMPANY;
  protected readonly nav = NAV;
  protected readonly year = new Date().getFullYear();

  protected go(id: string, ev: Event): void {
    this.scroller.to(id, ev);
  }

  protected up(): void {
    this.scroller.top();
  }
}
