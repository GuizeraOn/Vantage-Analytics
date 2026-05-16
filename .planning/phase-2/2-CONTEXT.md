# Phase 2: Dashboard & Analytics - Context

**Gathered:** 2026-05-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Desenvolvimento da interface de visualização de performance (Dashboard). Inclui a listagem de testes, visualização detalhada de um teste com métricas financeiras (ROAS, ROI, CPA), funil de conversão comparativo entre as variações A e B, e gráficos de vendas por horário e taxas de aprovação.

</domain>

<decisions>
## Implementation Decisions

### Dashboard Layout & UX
- Visualização principal em Grid de Cards para as métricas financeiras (ROAS, ROI, CPA, Lucro, Margem).
- Comparação entre Variação A e B exibida lado a lado nos cards, com indicação visual de porcentagem de diferença (ganho/perda).
- Periodicidade de dados diária com gráfico de evolução temporal.
- Navegação via Sidebar lateral contendo a lista de testes recentes e status.

### Visualização do Funil
- Gráfico de barras horizontal (usando Recharts) com setas indicativas de drop-off entre etapas.
- Etapas incluídas: Cliques, Visitas na Página, ICs (Add to Cart), Vendas Iniciadas e Vendas Aprovadas.
- Taxas de conversão calculadas em relação à etapa anterior (ex: % de Visitas que viraram ICs).
- Indicação visual (highlight verde) na variação que apresenta melhor ROI/ROAS.

### Métricas Financeiras e Gráficos
- Taxas de aprovação (Cartão, Pix, Boleto) exibidas em Donut Charts minimalistas.
- Gráfico de Área (Area Chart) suavizado para visualização de Vendas por Horário.
- Impostos e Reembolsos exibidos como itens separados dentro dos cards de faturamento para transparência.
- Formatação monetária fixa em Real (R$) com 2 casas decimais.

### the agent's Discretion
- Escolha das cores específicas para os gráficos (dentro da paleta Deep Purple).
- Implementação de estados de Empty State (quando não há métricas).
- Detalhes de micro-interações ao passar o mouse nos gráficos.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- Supabase Client (`src/lib/supabase.ts`).
- Shadcn components (Button, Card, Input, Label).
- Server Action structure (`src/app/actions/tests.ts`).

### Established Patterns
- Next.js 15 App Router.
- Tailwind 4 theme definitions.
- Server Actions para mutações e SSR para leitura.

### Integration Points
- `/tests/[id]` route para o dashboard detalhado.
- Consultas ao Supabase nas tabelas `tests` e `test_metrics`.

</code_context>

<specifics>
## Specific Ideas
- Usar Recharts para todos os gráficos.
- Garantir que o dashboard seja responsivo para uso mobile.
- Manter o estilo "Premium Dark" com fundos `bg-card/50` e `backdrop-blur`.

</specifics>

<deferred>
## Deferred Ideas
- Exportação de relatórios em PDF/CSV.
- Alertas automáticos via Telegram/Email sobre performance.

</deferred>
