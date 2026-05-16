# Funnel Tracker

## What This Is

Um site para registrar e testar variações de coisas no funil de vendas por um tempo de teste X. O objetivo é comparar resultados e ver qual variação performou melhor, exibindo métricas chave de operações de direct response como faturamento, CPA, ROAS, ROI, etc.

## Core Value

Registrar com precisão os resultados dos testes A/B no funil de vendas para identificar rapidamente a variação vencedora.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Integrar com Supabase para banco de dados e autenticação (se necessário)
- [ ] Aplicar o tema Shadcn (https://tweakcn.com/themes/cmlh0x713000104jrgmds6vcd)
- [ ] Interface para registrar variações do funil e testes (tempo de teste)
- [ ] Dashboard com métricas de Faturamento Líquido, Vendas Pendentes, Margem, Lucro, CPA, Gastos com anúncios, ROAS, ROI
- [ ] Visualização do Funil de Conversão (Cliques, Visitas, ICs, Vendas Iniciais, Vendas Aprovadas) com taxas de conversão (Meta Ads)
- [ ] Exibição de ARPU, Taxa de Aprovação (Cartão, Pix, Boleto)
- [ ] Exibição de métricas como Imposto total, Reembolso, Chargeback
- [ ] Gráfico ou visualização de Vendas por Horário

### Out of Scope

- [ ] Integração nativa complexa com as plataformas de anúncio (neste momento, será um registro manual ou via webhooks simples, assumindo o controle total sobre os dados).

## Context

O usuário trabalha com operações de direct response e precisa de um lugar centralizado para validar a performance de testes no funil de vendas, focado em métricas financeiras e de conversão do Meta Ads. O site será hospedado na Vercel e o banco de dados/backend no Supabase.

## Constraints

- **Tech Stack**: Next.js (assumido por conta da Vercel e Shadcn), Supabase, Vanilla CSS/Tailwind (requerido por Shadcn)
- **Hospedagem**: Vercel
- **Tema**: Shadcn específico (cmlh0x713000104jrgmds6vcd)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + Tailwind + Shadcn | Suporte oficial Vercel, ecossistema rico e tema requisitado | — Pending |
| Supabase | Escolha do usuário para BaaS rápido | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-16 after initialization*
