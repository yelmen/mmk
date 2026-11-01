import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Sayaç animasyonu: ekrana girince 0'dan hedefe sayar.
 * Kullanım: <span [counter]="150" suffix=" mm"></span>
 */
@Directive({ selector: '[counter]' })
export class CounterDirective implements AfterViewInit, OnDestroy {
  readonly counter = input.required<number>();
  readonly suffix = input<string>('');
  readonly duration = input<number>(1800);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;
  private raf = 0;

  ngAfterViewInit(): void {
    const target = this.counter();
    this.el.textContent = `0${this.suffix()}`;

    if (typeof IntersectionObserver === 'undefined') {
      this.el.textContent = `${target}${this.suffix()}`;
      return;
    }

    this.io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.run(target);
          this.io?.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    this.io.observe(this.el);
  }

  private run(target: number): void {
    const start = performance.now();
    const dur = this.duration();
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const dec = (String(target).split('.')[1] ?? '').length;
      this.el.textContent = `${(target * ease(t)).toFixed(dec)}${this.suffix()}`;
      if (t < 1) this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    cancelAnimationFrame(this.raf);
  }
}
