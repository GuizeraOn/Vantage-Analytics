# Phase 1: Setup & Core - Context

**Gathered:** 2026-05-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Configurar a infraestrutura básica do projeto Next.js, integrar com Supabase (tabelas de testes e métricas), aplicar o tema Shadcn (Deep Purple) e implementar o formulário de registro de novos testes de funil.

</domain>

<decisions>
## Implementation Decisions

### Formulário de Registro
- Campos obrigatórios: Nome do teste, Variação A, Variação B e Duração.
- Duração do teste definida em dias (ex: 7, 14, 30).
- Após salvar o teste, o sistema redireciona o usuário para o dashboard do teste criado.
- Layout do formulário: Card centralizado na página, seguindo a estética clean.

### Integração Supabase
- Autenticação: v1 sem autenticação obrigatória (foco no dashboard de uso interno).
- Estrutura de banco: Tabelas `tests` (metadados do teste) e `test_metrics` (resultados diários/acumulados) vinculadas.
- Abordagem técnica: Uso de Server Actions para mutações e SSR para leitura de dados.
- Seed data: O sistema deve iniciar com 3 testes fictícios populados para demonstração imediata do dashboard.

### the agent's Discretion
- Escolha da estrutura de pastas (App Router).
- Definição precisa dos schemas das tabelas no Supabase (SQL).
- Implementação dos toasts de feedback.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- None (Greenfield project).

### Established Patterns
- Next.js 14+ App Router patterns.
- Shadcn component usage for buttons, inputs, and cards.

### Integration Points
- Supabase client initialization.
- Vercel deployment config.

</code_context>

<specifics>
## Specific Ideas
- Tema: Deep Purple (https://tweakcn.com/themes/cmlh0x713000104jrgmds6vcd).
- Métricas a serem suportadas (nas tabelas): Faturamento Líquido, Vendas Pendentes, Margem, Lucro, CPA, Gastos, ROAS, ROI, Funil (Cliques -> Visitas -> ICs -> Vendas Iniciais -> Vendas Apr.).

</specifics>

<deferred>
## Deferred Ideas
- Autenticação de usuário (Login/Signup).
- Integração automática com APIs do Meta Ads.

</deferred>
