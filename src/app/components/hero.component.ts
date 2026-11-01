import { Component, ElementRef, HostListener, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { PRODUCTS, Product } from '../data/products';
import { STATS } from '../data/site';
import { CounterDirective } from '../shared/counter.directive';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [CounterDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly scroller = inject(ScrollService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** Sahnede dönecek şeffaf kapılar */
  protected readonly featured: Product[] = ['natura-guard', 'chevron', 'hexawood', 'vanguard', 'crest', 'fragment']
    .map((id) => PRODUCTS.find((p) => p.id === id)!)
    .filter(Boolean);

  protected readonly stats = STATS;
  protected readonly index = signal(0);
  protected readonly current = computed(() => this.featured[this.index()]);

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private start(): void {
    this.stop();
    this.timer = setInterval(() => this.next(), 4800);
  }

  private stop(): void {
    if (this.timer) clearInterval(this.timer);
  }

  next(): void {
    this.index.update((i) => (i + 1) % this.featured.length);
  }

  go(i: number): void {
    this.index.set(i);
    this.start();
  }

  /** Her kapının aktif olana göre konumu: -2..2 */
  pos(i: number): number {
    const n = this.featured.length;
    let d = i - this.index();
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const r = this.host.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    this.host.style.setProperty('--mx', x.toFixed(3));
    this.host.style.setProperty('--my', y.toFixed(3));
  }

  to(id: string, ev: Event): void {
    this.scroller.to(id, ev);
  }
}
