import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ClienteFormComponent {
  form: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
    });
  }

  submit() {
    this.successMsg = '';
    this.errorMsg = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    // Simula requisição ao backend
    setTimeout(() => {
      this.loading = false;
      if (this.form.value.email === 'erro@email.com') {
        this.errorMsg = 'Erro ao salvar cliente. Tente novamente.';
      } else {
        this.successMsg = 'Cliente salvo com sucesso!';
        this.form.reset();
      }
    }, 1500);
  }

  get nome() { return this.form.get('nome'); }
  get email() { return this.form.get('email'); }
  get telefone() { return this.form.get('telefone'); }
} 