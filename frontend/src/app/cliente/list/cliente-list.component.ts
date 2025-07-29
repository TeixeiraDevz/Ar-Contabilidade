import { Component } from '@angular/core';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  standalone: true,
})
export class ClienteListComponent {
  clientes: Cliente[] = [
    { id: 1, nome: 'Maria Silva', email: 'maria@email.com', telefone: '11999999999' },
    { id: 2, nome: 'João Souza', email: 'joao@email.com', telefone: '21988888888' },
    { id: 3, nome: 'Ana Lima', email: 'ana@email.com', telefone: '31977777777' },
  ];
  loading = false;
  successMsg = '';
  errorMsg = '';

  editar(cliente: Cliente) {
    // Aqui você pode navegar para a tela de edição futuramente
    alert('Editar cliente: ' + cliente.nome);
  }

  excluir(cliente: Cliente) {
    if (confirm('Tem certeza que deseja excluir ' + cliente.nome + '?')) {
      this.loading = true;
      setTimeout(() => {
        this.clientes = this.clientes.filter(c => c.id !== cliente.id);
        this.loading = false;
        this.successMsg = 'Cliente excluído com sucesso!';
      }, 1000);
    }
  }
} 