import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MembroEquipe {
  id: number;
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EquipeListComponent {
  equipe: MembroEquipe[] = [
    { id: 1, nome: 'Carlos Andrade', cargo: 'Contador', email: 'carlos@email.com', telefone: '11999999999' },
    { id: 2, nome: 'Fernanda Lima', cargo: 'Assistente', email: 'fernanda@email.com', telefone: '21988888888' },
    { id: 3, nome: 'Paulo Souza', cargo: 'Analista', email: 'paulo@email.com', telefone: '31977777777' },
  ];
  loading = false;
  successMsg = '';
  errorMsg = '';

  editar(membro: MembroEquipe) {
    alert('Editar membro: ' + membro.nome);
  }

  excluir(membro: MembroEquipe) {
    if (confirm('Tem certeza que deseja excluir ' + membro.nome + '?')) {
      this.loading = true;
      setTimeout(() => {
        this.equipe = this.equipe.filter(e => e.id !== membro.id);
        this.loading = false;
        this.successMsg = 'Membro excluído com sucesso!';
      }, 1000);
    }
  }
} 