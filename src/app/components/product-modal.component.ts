import { Component, ElementRef, HostListener, effect, inject, input, output, signal, viewChild } from '@angular/core';
import { COMPANY } from '../data/site';
import { Product } from '../data/products';
import { QuoteService } from '../shared/quote.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  private readonly quote = inject(QuoteService);
  private readonly scroller = inject(ScrollService);

  readonly product = input<Product | null>(null);
  readonly position = input<number>(0);
  readonly total = input<number>(0);

  readonly closed = output<void>();
  readonly prev = output<void>();
  readonly next = output<void>();

  protected readonly company = COMPANY;
  protected readonly showScene = signal(false);
  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  constructor() {
    // Modal açılınca sayfa kaydırmayı kilitle, modeli değiştirince görseli sıfırla
    effect((onCleanup) => {
      const p = this.product();
      if (p) {
        document.body.classList.add('no-scroll');
        this.showScene.set(false);
        queueMicrotask(() => this.closeBtn()?.nativeElement.focus({ preventScroll: true }));
        onCleanup(() => document.body.classList.remove('no-scroll'));
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.product()) this.closed.emit();
  }

  @HostListener('document:keydown.arrowright')
  onRight(): void {
    if (this.product()) this.next.emit();
  }

  @HostListener('document:keydown.arrowleft')
  onLeft(): void {
    if (this.product()) this.prev.emit();
  }

  protected requestQuote(p: Product): void {
    this.quote.select(p.name);
    this.closed.emit();
    setTimeout(() => this.scroller.to('iletisim'), 80);
  }

  protected whatsapp(p: Product): string {
    return this.quote.whatsappUrl(`Merhaba, MMK Grup ${p.name} modeli hakkında bilgi / teklif almak istiyorum.`);
  }
}
