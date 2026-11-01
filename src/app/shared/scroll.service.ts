import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  /** Sayfa içi bölüme yumuşak kaydırma */
  to(id: string, ev?: Event): void {
    ev?.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 0;
    window.scrollTo({ top, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }

  top(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
