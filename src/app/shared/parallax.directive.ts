import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Scroll'a bağlı paralaks. Elemana --py (px) değişkenini yazar.
 * CSS'te: transform: translate3d(0, var(--py, 0px), 0) scale(1.15)
 * Kullanım: <img parallax [speed]="0.15">
 */
@Directive({ selector: '[parallax]' })
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  readonly speed = input<number>(0.15);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private raf = 0;
  private visible = true;
  private io?: IntersectionObserver;

  private readonly onScroll = () => {
    if (!this.visible || this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      this.update();
    });
  };

  ngAfterViewInit(): void {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });

    if (typeof IntersectionObserver !== 'undefined') {
      this.io = new IntersectionObserver((e) => (this.visible = e.some((x) => x.isIntersecting)), {
        rootMargin: '200px',
      });
      this.io.observe(this.el.parentElement ?? this.el);
    }
    this.update();
  }

  private update(): void {
    const host = this.el.parentElement ?? this.el;
    const r = host.getBoundingClientRect();
    const center = r.top + r.height / 2 - window.innerHeight / 2;
    this.el.style.setProperty('--py', `${(-center * this.speed()).toFixed(1)}px`);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    this.io?.disconnect();
    cancelAnimationFrame(this.raf);
  }
}
