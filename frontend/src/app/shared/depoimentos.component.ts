import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="depoimentos-section">
      <h2 class="section-title">Depoimentos</h2>
      <div class="depoimentos-grid">
        <blockquote class="depoimento">
          <p>"Atendimento ágil e assertivo. Recomendo!"</p>
          <footer>— Cliente A</footer>
        </blockquote>
        <blockquote class="depoimento">
          <p>"Profissionais competentes e parceiros do nosso crescimento."</p>
          <footer>— Cliente B</footer>
        </blockquote>
        <blockquote class="depoimento">
          <p>"Excelente suporte e orientação fiscal."</p>
          <footer>— Cliente C</footer>
        </blockquote>
      </div>
    </section>
  `,
  styles: [`
    .depoimentos-section { 
      padding: 48px 20px; 
      width: 100%;
      background: #fff;
    }
    
    .section-title { 
      text-align: center; 
      margin-bottom: 32px; 
      font-size: 2.2rem;
      color: #0B1628;
      line-height: 1.3;
    }
    
    .depoimentos-grid { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 24px; 
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .depoimento { 
      background: #f8f9fa; 
      border: 1px solid #e5e7eb; 
      border-radius: 12px; 
      padding: 24px; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .depoimento:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }
    
    .depoimento p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #374151;
      margin: 0 0 16px 0;
      font-style: italic;
    }
    
    .depoimento footer {
      font-weight: 600;
      color: #1a4fa0;
      font-size: 0.95rem;
    }
    
    /* Tablet */
    @media (max-width: 900px) {
      .depoimentos-section {
        padding: 40px 20px;
      }
      
      .section-title {
        font-size: 2rem;
        margin-bottom: 24px;
      }
      
      .depoimentos-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      
      .depoimento {
        padding: 20px;
      }
      
      .depoimento p {
        font-size: 1rem;
      }
    }
    
    /* Mobile */
    @media (max-width: 600px) {
      .depoimentos-section {
        padding: 32px 16px;
      }
      
      .section-title {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
      
      .depoimentos-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .depoimento {
        padding: 16px;
      }
      
      .depoimento p {
        font-size: 0.95rem;
      }
    }
  `]
})
export class DepoimentosComponent {}


