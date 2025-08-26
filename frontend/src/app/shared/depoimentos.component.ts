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
          <p>“Atendimento ágil e assertivo. Recomendo!”</p>
          <footer>— Cliente A</footer>
        </blockquote>
        <blockquote class="depoimento">
          <p>“Profissionais competentes e parceiros do nosso crescimento.”</p>
          <footer>— Cliente B</footer>
        </blockquote>
        <blockquote class="depoimento">
          <p>“Excelente suporte e orientação fiscal.”</p>
          <footer>— Cliente C</footer>
        </blockquote>
      </div>
    </section>
  `,
  styles: [`
    .depoimentos-section { padding: 48px 16px; max-width: 1100px; margin: 0 auto; }
    .section-title { text-align: center; margin-bottom: 24px; }
    .depoimentos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .depoimento { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    @media (max-width: 900px) { .depoimentos-grid { grid-template-columns: 1fr; } }
  `]
})
export class DepoimentosComponent {}


