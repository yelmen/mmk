import { Component, computed, effect, inject, signal } from '@angular/core';
import { FINISHES, Finish, PRODUCTS, Product } from '../data/products';
import { QuoteService } from '../shared/quote.service';
import { RevealDirective } from '../shared/reveal.directive';
import { TiltDirective } from '../shared/tilt.directive';
import { ProductModalComponent } from './product-modal.component';

@Component({
  selector: 'app-collection',
  imports: [RevealDirective, TiltDirective, ProductModalComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  protected readonly all = PRODUCTS;
  protected readonly finishes = FINISHES;

  protected readonly filter = signal<Finish | 'Tümü'>('Tümü');
  protected readonly query = signal('');
  protected readonly selectedId = signal<string | null>(null);

  private readonly quote = inject(QuoteService);

  constructor() {
    effect(() => {
      const f = this.quote.finishRequest();
      if (f && (FINISHES as string[]).includes(f)) this.filter.set(f as Finish);
    });
  }

  protected readonly list = computed(() => {
    const f = this.filter();
    const q = this.query().trim().toLocaleLowerCase('tr');
    return this.all.filter((p) => {
      const okFilter = f === 'Tümü' || p.finish === f;
      const okQuery =
        !q || `${p.name} ${p.tagline} ${p.finish} ${p.tags.join(' ')}`.toLocaleLowerCase('tr').includes(q);
      return okFilter && okQuery;
    });
  });

  protected readonly selected = computed<Product | null>(() => {
    const id = this.selectedId();
    return id ? (this.all.find((p) => p.id === id) ?? null) : null;
  });

  protected readonly selectedIndex = computed(() => {
    const id = this.selectedId();
    return this.list().findIndex((p) => p.id === id);
  });

  protected count(f: Finish | 'Tümü'): number {
    return f === 'Tümü' ? this.all.length : this.all.filter((p) => p.finish === f).length;
  }

  protected num(p: Product): string {
    return String(this.all.indexOf(p) + 1).padStart(2, '0');
  }

  protected setFilter(f: Finish | 'Tümü'): void {
    this.filter.set(f);
  }

  protected onSearch(ev: Event): void {
    this.query.set((ev.target as HTMLInputElement).value);
  }

  protected reset(): void {
    this.filter.set('Tümü');
    this.query.set('');
  }

  protected open(p: Product): void {
    this.selectedId.set(p.id);
  }

  protected close(): void {
    this.selectedId.set(null);
  }

  protected step(dir: 1 | -1): void {
    const list = this.list();
    if (!list.length) return;
    const i = this.selectedIndex();
    const next = list[(i + dir + list.length) % list.length];
    this.selectedId.set(next.id);
  }
}
