import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

/**
 * Fare hareketine göre 3D eğilme + ışık (spotlight) efekti.
 * CSS değişkenleri: --rx, --ry, --mx, --my
 */
@Directive({ selector: '[tilt]' })
export class TiltDirective {
  readonly tilt = input<number>(8);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private raf = 0;

  private readonly canHover =
    typeof matchMedia !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches;

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (!this.canHover) return;
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const r = this.el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const max = this.tilt() || 8;
      this.el.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`);
      this.el.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`);
      this.el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      this.el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
  }

  @HostListener('mouseleave')
  onLeave(): void {
    cancelAnimationFrame(this.raf);
    this.el.style.setProperty('--rx', '0deg');
    this.el.style.setProperty('--ry', '0deg');
  }
}
