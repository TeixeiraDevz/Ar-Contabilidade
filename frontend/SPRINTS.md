## Plano de Desenvolvimento - AR Gestão Contábil e Financeira

### Visão Geral
- **Frontend primeiro**: implementar layout base e autenticação.
- **Backend em seguida**: estrutura da API e endpoints de autenticação.

---

## Frontend

### Sprint 1: Estrutura Base e Autenticação (MVP)
- **Objetivo**: Layout principal (Header/Footer) e autenticação básica.
- **Tarefas**:
  - Desenvolver `Header` (layout/header).
  - Desenvolver `Footer` (layout/footer).
  - Integrar `Header` e `Footer` ao `App` principal.
  - Criar módulo de autenticação (`auth-module.ts`) com rotas de login/registro.
  - Implementar `LoginComponent` (formulário básico).
  - Implementar `RegisterComponent` (formulário básico).
  - Criar `AuthService` para comunicação com API de auth.
  - Configurar `Auth Guards` (CanActivate) para rotas protegidas.
  - Implementar `HTTP Interceptor` para JWT e tratamento de 401.
- **Status atual**:
  - Header: concluído (arquivos `layout/header/header.ts|html|scss`).
  - Footer: em desenvolvimento (arquivos `layout/footer/footer.ts|html|scss`).
  - Integração no `App`: pendente.
  - Fluxo de auth: pendente.

### Sprint 2: Páginas Institucionais e Navegação
- **Objetivo**: Páginas estáticas e navegação principal.
- **Tarefas**:
  - Desenvolver `HomeComponent` (conteúdo introdutório).
  - Criar `SobreComponent` (`home/sobre`).
  - Criar `ServicosComponent` (`home/servicos`).
  - Criar `ContatoComponent` (`home/contato`) com formulário (sem backend inicialmente).
  - Configurar rotas para Home, Sobre, Serviços e Contato.
  - Atualizar `Header` com links de navegação.

---

## Backend

### Sprint 1: Estrutura Base da API e Autenticação
- **Objetivo**: Configurar projeto e endpoints de autenticação.
- **Tarefas**:
  - Configurar Express.js com TypeScript.
  - Configurar ambiente de dev (nodemon, ts-node).
  - Criar estrutura de pastas: `controllers/`, `services/`, `repositories/`, `models/`, `dtos/`, `routes/`, `config/`, `utils/`.
  - Criar `User` (Model/Entity) em `models/`.
  - Criar `UserDTO` em `dtos/` (entrada/saída).
  - Criar `AuthRepository` (persistência/queries).
  - Criar `AuthService` (regras de registro/login, hash de senha, JWT).
  - Criar `AuthController` com endpoints `/register` e `/login`.
  - Implementar geração/validação de `JWT`.
  - Implementar middleware global de erros (tratamento centralizado).
  - Implementar middleware de validação JWT para rotas protegidas.

---

## Diretrizes Arquiteturais (Resumo)
- **Camadas**: Controller → Service → Repository → Model/Entity → DTOs.
- **DTOs e Mappers**: comunicação entre camadas via DTOs, conversão por mappers.
- **Injeção de Dependências**: depender de interfaces/abstrações (DIP).
- **Tratamento de Erros**: centralizado; evitar try/catch espalhado.
- **Testes**: services testáveis via mocks; integração para endpoints.
- **Qualidade**: SRP, modularidade, nomes claros, funções curtas (~30 linhas).

---

## Próximos Passos (Frontend)
1. Finalizar `Footer` e integrar `Header`/`Footer` no `App`.
2. Criar `AuthService`, `LoginComponent`, `RegisterComponent` e rotas.
3. Implementar `Auth Guard` e `HTTP Interceptor` (JWT).
4. Iniciar Sprint 2 (páginas institucionais e navegação).
