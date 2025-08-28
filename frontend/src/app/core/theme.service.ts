import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'ar-theme';
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark';

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.currentTheme = this.resolveInitialTheme();
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.currentTheme);
    }
  }

  get theme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  toggle(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.currentTheme);
      try {
        localStorage.setItem(this.storageKey, this.currentTheme);
      } catch {}
    }
  }

  private resolveInitialTheme(): 'light' | 'dark' {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const stored = localStorage.getItem(this.storageKey) as 'light' | 'dark' | null;
        if (stored === 'light' || stored === 'dark') return stored;
      } catch {}
      const prefersDark = window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light'; // Default for SSR
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (!isPlatformBrowser(this.platformId)) return;
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


