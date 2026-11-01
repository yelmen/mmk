import { Component, signal } from '@angular/core';
import { BannerComponent } from './components/banner.component';
import { CollectionComponent } from './components/collection.component';
import { ContactComponent } from './components/contact.component';
import { FaqComponent } from './components/faq.component';
import { FloatingActionsComponent } from './components/floating-actions.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { MarqueeComponent } from './components/marquee.component';
import { MaterialsComponent } from './components/materials.component';
import { PreloaderComponent } from './components/preloader.component';
import { TechnologyComponent } from './components/technology.component';

@Component({
  selector: 'app-root',
  imports: [
    PreloaderComponent,
    HeaderComponent,
    HeroComponent,
    MarqueeComponent,
    CollectionComponent,
    BannerComponent,
    MaterialsComponent,
    TechnologyComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FloatingActionsComponent,
  ],
  template: `
    @if (!ready()) {
      <app-preloader (finished)="onReady()" />
    }
    <app-header />
    <main>
      <app-hero />
      <app-marquee />
      <app-collection />
      <app-banner />
      <app-materials />
      <app-technology />
      <app-faq />
      <app-contact />
    </main>
    <app-footer />
    <app-floating-actions />
  `,
})
export class App {
  protected readonly ready = signal(false);

  constructor() {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0);
    // Preloader bitmeden de hero animasyonlarını başlat (güvenlik)
    setTimeout(() => this.onReady(), 4000);
  }

  protected onReady(): void {
    if (this.ready()) return;
    this.ready.set(true);
    document.documentElement.classList.add('ready');
    document.body.classList.remove('no-scroll');
  }
}
