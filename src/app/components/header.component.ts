import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { COMPANY, NAV } from '../data/site';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly scroller = inject(ScrollService);

  protected readonly nav = NAV;
  protected readonly company = COMPANY;

  protected readonly scrolled = signal(false);
  protected readonly hidden = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('');

  private lastY = 0;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 40);
    if (!this.menuOpen()) {
      this.hidden.set(y > this.lastY && y > 480);
    }
    this.lastY = y;

    // scroll-spy
    let current = '';
    for (const item of this.nav) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.id;
    }
    this.active.set(current);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.close();
  }

  go(id: string, ev: Event): void {
    this.close();
    this.scroller.to(id, ev);
  }

  toggle(): void {
    this.menuOpen.update((v) => !v);
    document.body.classList.toggle('no-scroll', this.menuOpen());
  }

  close(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      document.body.classList.remove('no-scroll');
    }
  }

  top(ev: Event): void {
    ev.preventDefault();
    this.close();
    this.scroller.top();
  }
}
