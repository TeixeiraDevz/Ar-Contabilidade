import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { ServicosSectionComponent } from './servicos-section.component';
import { MotivacaoSectionComponent } from './motivacao-section.component';
import { PlanosSectionComponent } from './planos-section.component';
import { DepoimentosComponent } from '../../shared/depoimentos.component';
import { FaqComponent } from '../../shared/faq.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicosSectionComponent,
    MotivacaoSectionComponent,
    PlanosSectionComponent,
    DepoimentosComponent,
    FaqComponent
  ],
})
export class Home {}

