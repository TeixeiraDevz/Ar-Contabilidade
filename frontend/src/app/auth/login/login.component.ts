import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
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
        this.errorMsg = 'Erro ao fazer login. Tente novamente.';
      } else {
        this.successMsg = 'Login realizado com sucesso!';
        this.form.reset();
      }
    }, 1500);
  }

  get email() { return this.form.get('email'); }
  get senha() { return this.form.get('senha'); }
} 