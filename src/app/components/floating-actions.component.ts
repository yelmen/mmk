import { Component, HostListener, inject, signal } from '@angular/core';
import { COMPANY } from '../data/site';
import { QuoteService } from '../shared/quote.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-floating-actions',
  template: `
    <div class="progress" aria-hidden="true"><i [style.transform]="'scaleX(' + progress() + ')'"></i></div>

    <div class="fab" [class.show]="visible()">
      <button class="up" (click)="up()" aria-label="Yukarı çık">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
      </button>
      <!-- <a class="wa" [href]="wa" target="_blank" rel="noopener" aria-label="WhatsApp ile yazın">
        <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.04 3C9.4 3 4 8.38 4 15.01c0 2.12.55 4.18 1.6 6L4 29l8.17-1.57A12 12 0 0 0 16.04 28C22.67 28 28 22.64 28 16.01 28 9.37 22.67 3 16.04 3Zm0 22a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-4.85.93.98-4.72-.24-.38A9.95 9.95 0 0 1 6 15c0-5.52 4.5-10 10.04-10A10 10 0 0 1 26 16.01C26 21.52 21.57 25 16.04 25Zm5.5-7.5c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.5.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z"/></svg>
      </a> -->
    </div>
  `,
  styles: `
    .progress { position: fixed; inset: 0 0 auto 0; height: 3px; z-index: 150; pointer-events: none; i { display: block; height: 100%; transform-origin: left; background: linear-gradient(90deg, var(--walnut), var(--copper-2)); } }
    .fab { position: fixed; right: 20px; bottom: 20px; z-index: 120; display: grid; gap: 12px; }
    .fab > * {
      width: 54px; height: 54px; display: grid; place-items: center; border-radius: 50%;
      transition: transform 0.5s var(--ease), opacity 0.5s, background 0.3s;
      svg { width: 24px; height: 24px; }
    }
    .up { background: rgba(20, 23, 27, 0.85); border: 1px solid var(--line); backdrop-filter: blur(8px); opacity: 0; transform: translateY(20px) scale(0.8); pointer-events: none; &:hover { background: var(--copper); color: #111; } }
    .show .up { opacity: 1; transform: none; pointer-events: auto; }
    .wa { background: #25d366; color: #fff; box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35); animation: ring 3s ease-in-out infinite; &:hover { transform: scale(1.08); } }
    @keyframes ring { 0%, 100% { box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35), 0 0 0 0 rgba(37, 211, 102, 0.4); } 50% { box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35), 0 0 0 14px rgba(37, 211, 102, 0); } }
    @media (max-width: 600px) { .fab { right: 14px; bottom: 14px; } .fab > * { width: 50px; height: 50px; } }
  `,
})
export class FloatingActionsComponent {
  private readonly scroller = inject(ScrollService);
  private readonly quote = inject(QuoteService);

  protected readonly progress = signal(0);
  protected readonly visible = signal(false);
  protected readonly wa = this.quote.whatsappUrl(`Merhaba, ${COMPANY.name} çelik kapı modelleri hakkında bilgi almak istiyorum.`);

  @HostListener('window:scroll')
  onScroll(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    this.visible.set(window.scrollY > 700);
  }

  protected up(): void {
    this.scroller.top();
  }
}
