import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Elemanı ekrana girdiğinde animasyonla gösterir.
 * Kullanım: <div reveal="up" [delay]="120">…</div>
 * Yönler: up | down | left | right | zoom | clip
 */
@Directive({ selector: '[reveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly reveal = input<string>('up');
  readonly delay = input<number>(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngAfterViewInit(): void {
    const dir = this.reveal() || 'up';
    this.el.classList.add('reveal', `reveal-${dir}`);
    this.el.style.setProperty('--rd', `${this.delay()}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      this.el.classList.add('in');
      return;
    }

    this.io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.el.classList.add('in');
            this.io?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    this.io.observe(this.el);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
