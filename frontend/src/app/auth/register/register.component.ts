import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private tokenService: TokenService) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
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
    this.auth.register(this.form.value).subscribe({
      next: (res) => {
        this.tokenService.setToken(res.token);
        this.successMsg = 'Conta criada com sucesso!';
        this.form.reset();
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Erro ao criar conta. Tente novamente.';
        this.loading = false;
      }
    });
  }

  get nome() { return this.form.get('nome'); }
  get email() { return this.form.get('email'); }
  get senha() { return this.form.get('senha'); }
}
