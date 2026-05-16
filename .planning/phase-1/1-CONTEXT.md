# Phase 1: Setup & Core - Context

**Gathered:** 2026-05-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Configurar projeto Next.js, Shadcn (com tema), Supabase e registro básico de testes.

</domain>

<decisions>
## Implementation Decisions

### Formulário de Registro
- Campos obrigatórios: Nome do teste, Variação A, Variação B, Duração
- Duração do teste definida em dias (ex: 7, 14, 30)
- Após salvar o teste, redireciona para o Dashboard do teste
- Layout do formulário renderizado em um card centralizado (simples)

### Integração Supabase
- Autenticação v1: Login com email/senha padrão
- Tabela de testes: tests(id, name, var_a, var_b, duration_days, created_at, status)
- Cliente: Usar @supabase/ssr para Next.js App Router

### the agent's Discretion
Todos os detalhes adicionais de setup (Tailwind config, variáveis de ambiente) ficam a critério do agente, garantindo aderência ao tema Shadcn solicitado.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- N/A (Greenfield)

### Established Patterns
- N/A (Greenfield)

### Integration Points
- N/A (Greenfield)

</code_context>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>
