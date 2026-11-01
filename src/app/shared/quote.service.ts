import { Injectable, signal } from '@angular/core';
import { COMPANY } from '../data/site';

/** Seçilen modeli koleksiyondan iletişim formuna taşır. */
@Injectable({ providedIn: 'root' })
export class QuoteService {
  readonly product = signal<string>('');
  /** Malzeme bölümünden koleksiyon filtresini tetiklemek için */
  readonly finishRequest = signal<string | null>(null);

  select(name: string): void {
    this.product.set(name);
  }

  whatsappUrl(message: string): string {
    return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
  }
}
