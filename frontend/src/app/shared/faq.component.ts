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
        <div class="faq-item" [class.expanded]="item.open" *ngFor="let item of faqs; let i = index">
          <button class="faq-q" (click)="toggle(i)" [attr.aria-expanded]="item.open">{{ item.question }}</button>
          <div class="faq-a" *ngIf="item.open">{{ item.answer }}</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-section { 
      padding: 48px 20px; 
      max-width: 1200px; 
      margin: 0 auto; 
      background: #f8f9fa;
    }
    
    .section-title { 
      text-align: center; 
      margin-bottom: 32px; 
      font-size: 2.2rem;
      color: #0B1628;
      line-height: 1.3;
    }
    
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .faq-item { 
      border: 1px solid #e5e7eb; 
      border-radius: 12px; 
      background: #fff; 
      overflow: hidden;
      transition: box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    .faq-item:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }
    
    .faq-q { 
      width: 100%; 
      text-align: left; 
      padding: 24px 32px; 
      background: transparent; 
      border: 0; 
      font-weight: 600; 
      cursor: pointer;
      font-size: 1.1rem;
      color: #0B1628;
      transition: background-color 0.2s;
      position: relative;
      z-index: 2;
    }
    
    .faq-q:hover {
      background-color: #f8f9fa;
    }
    
    .faq-q::after {
      content: '+';
      position: absolute;
      right: 32px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      color: #1a4fa0;
      transition: transform 0.2s;
      z-index: 3;
    }
    
    .faq-item.expanded .faq-q::after {
      transform: translateY(-50%) rotate(45deg);
    }
    
    .faq-a { 
      padding: 0 32px 24px 32px; 
      color: #374151; 
      line-height: 1.6;
      font-size: 1rem;
      z-index: 1;
    }
    
    /* Tablet */
    @media (max-width: 900px) {
      .faq-section {
        padding: 40px 20px;
      }
      
      .section-title {
        font-size: 2rem;
        margin-bottom: 24px;
      }
      
      .faq-q {
        padding: 20px 24px;
        font-size: 1rem;
      }
      
      .faq-a {
        padding: 0 24px 20px 24px;
        font-size: 0.95rem;
      }
    }
    
    /* Mobile */
    @media (max-width: 600px) {
      .faq-section {
        padding: 32px 16px;
      }
      
      .section-title {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
      
      .faq-q {
        padding: 18px 20px;
        font-size: 0.95rem;
      }
      
      .faq-a {
        padding: 0 20px 18px 20px;
        font-size: 0.9rem;
      }
    }
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


