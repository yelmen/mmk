import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { COMPANY } from '../data/site';
import { PRODUCTS } from '../data/products';
import { QuoteService } from '../shared/quote.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly quote = inject(QuoteService);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly company = COMPANY;
  protected readonly products = PRODUCTS;
  protected readonly sent = signal(false);

  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`,
  );
  protected readonly mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9 +()-]{10,18}$/)]],
    product: [''],
    message: [''],
  });

  constructor() {
    // Modal'dan gelen model seçimini forma yansıt
    effect(() => {
      const name = this.quote.product();
      if (name) this.form.patchValue({ product: name });
    });
  }

  protected invalid(ctrl: 'name' | 'phone'): boolean {
    const c = this.form.controls[ctrl];
    return c.invalid && (c.dirty || c.touched);
  }

  /** Frontend-only: formu WhatsApp mesajına çevirir. Backend bağlanınca burası API çağrısı olabilir. */
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const text = [
      'Merhaba, MMK Grup web sitesinden ulaşıyorum.',
      `Ad Soyad: ${v.name}`,
      `Telefon: ${v.phone}`,
      v.product ? `İlgilendiğim model: ${v.product}` : '',
      v.message ? `Mesaj: ${v.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(this.quote.whatsappUrl(text), '_blank', 'noopener');
    this.sent.set(true);
    this.form.reset({ name: '', phone: '', product: '', message: '' });
    setTimeout(() => this.sent.set(false), 6000);
  }
}
