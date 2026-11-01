import { Component, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="pre" [class.out]="out()" aria-hidden="true">
      <div class="inner">
        <img src="assets/logo.png" alt="" class="logo" width="160" height="108" />
        <div class="bar"><i></i></div>
        <p>Design Collection <b>2026</b></p>
      </div>
      <div class="curtain"></div>
    </div>
  `,
  styles: `
    .pre {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: grid;
      place-items: center;
      background: #0b0c0e;
      transition: transform 1s var(--ease-io), visibility 0s 1s;
    }
    .pre.out {
      transform: translateY(-100%);
      visibility: hidden;
    }
    .inner {
      display: grid;
      justify-items: center;
      gap: 26px;
      transition: opacity 0.4s, transform 0.6s var(--ease);
    }
    .out .inner { opacity: 0; transform: translateY(-20px); }
    .logo {
      width: 150px;
      height: auto;
      animation: pulse 2s var(--ease) infinite;
      filter: drop-shadow(0 0 30px rgba(201, 140, 91, 0.35));
    }
    .bar {
      width: 220px;
      height: 2px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
      border-radius: 2px;
      i {
        display: block;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, var(--copper), var(--copper-2));
        transform: translateX(-100%);
        animation: load 1.7s var(--ease-io) forwards;
      }
    }
    p {
      font-size: 11px;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: var(--muted);
      b { color: var(--copper); font-weight: 600; }
    }
    @keyframes load { to { transform: translateX(0); } }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
  `,
})
export class PreloaderComponent implements OnInit {
  readonly finished = output<void>();
  protected readonly out = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.out.set(true);
      setTimeout(() => this.finished.emit(), 700);
    }, 1900);
  }
}
