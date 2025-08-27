import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'ar-theme';
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.currentTheme = this.resolveInitialTheme();
    this.applyTheme(this.currentTheme);
  }

  get theme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  toggle(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    try {
      localStorage.setItem(this.storageKey, this.currentTheme);
    } catch {}
  }

  private resolveInitialTheme(): 'light' | 'dark' {
    try {
      const stored = localStorage.getItem(this.storageKey) as 'light' | 'dark' | null;
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const body = document.body;
    if (!body) return;
    if (theme === 'dark') {
      this.renderer.addClass(body, 'theme-dark');
      this.renderer.removeClass(body, 'theme-light');
    } else {
      this.renderer.addClass(body, 'theme-light');
      this.renderer.removeClass(body, 'theme-dark');
    }
  }
}

