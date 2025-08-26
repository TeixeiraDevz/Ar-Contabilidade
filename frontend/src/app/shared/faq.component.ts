import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem { question: string; answer: string; open?: boolean }

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="faq-section">
      <h2 class="section-title">Perguntas Frequentes</h2>
      <div class="faq-list">
        <div class="faq-item" *ngFor="let item of faqs; let i = index">
          <button class="faq-q" (click)="toggle(i)" [attr.aria-expanded]="item.open">{{ item.question }}</button>
          <div class="faq-a" *ngIf="item.open">{{ item.answer }}</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-section { padding: 48px 16px; max-width: 900px; margin: 0 auto; }
    .section-title { text-align: center; margin-bottom: 24px; }
    .faq-item { border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 12px; background: #fff; }
    .faq-q { width: 100%; text-align: left; padding: 14px 16px; background: transparent; border: 0; font-weight: 600; cursor: pointer; }
    .faq-a { padding: 0 16px 16px 16px; color: #374151; }
  `]
})
export class FaqComponent {
  faqs: FaqItem[] = [
    { question: 'Como iniciar a contabilidade com vocês?', answer: 'Entre em contato via WhatsApp ou formulário e faremos o onboarding.' },
    { question: 'Atendem MEI e Simples Nacional?', answer: 'Sim, atendemos MEI, Simples, Lucro Presumido e Lucro Real.' },
    { question: 'Atendimento presencial?', answer: 'Atendemos em Manaus-AM e também de forma 100% online.' }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}


