# AR Gestão Contábil e Financeira

Este projeto é um site institucional para a empresa **AR Gestão Contábil e Financeira**, desenvolvido com Angular e PrimeNG. O objetivo é apresentar informações da empresa, serviços, equipe, área para clientes e um assistente de IA para suporte.

## Tecnologias Utilizadas
- **Frontend:** Angular 20, PrimeNG, SCSS
- **Backend:** (em desenvolvimento) Node.js, Express, TypeScript, MongoDB

## Plano de Desenvolvimento (Sprints)
Consulte o plano detalhado de sprints e status em `SPRINTS.md`.

## Estrutura de Pastas
```
frontend/
  ├── src/
  │   ├── app/
  │   │   ├── core/        # Serviços e utilitários
  │   │   ├── auth/        # Autenticação
  │   │   ├── cliente/     # Área do cliente (PF/PJ)
  │   │   ├── home/        # Home, Sobre, Serviços, Contato
  │   │   ├── equipe/      # Equipe da empresa
  │   │   ├── shared/      # Componentes compartilhados
  │   │   ├── layout/      # Header, Footer, Layout geral
  │   │   └── ...
  │   ├── assets/          # Imagens e arquivos estáticos
  │   └── environments/    # Configurações de ambiente
  ├── angular.json
  └── package.json
```

## Como rodar o projeto
1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve --port 4201
   ```
   O site estará disponível em [http://localhost:4201](http://localhost:4201)

## Dicas para desenvolvimento
- Coloque imagens em `src/assets` e use o caminho `assets/nome-da-imagem.ext` no HTML.
- Para criar novos componentes, use:
  ```bash
  ng generate component caminho/nome
  ```
- Para criar novos módulos:
  ```bash
  ng generate module caminho/nome --routing
  ```
- O menu e as rotas já estão configurados para Home, Sobre, Serviços e Contato.

## Estrutura futura (backend)
O backend será implementado em `backend/` com Node.js, Express, TypeScript e MongoDB, seguindo princípios SOLID e arquitetura em camadas (controllers, services, repositories, dtos, models, routes, utils).

## Contato
Para dúvidas ou sugestões, entre em contato com a equipe AR Gestão Contábil e Financeira.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo LICENSE para mais detalhes.
