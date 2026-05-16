---
phase: 1
slug: setup-core
wave: 1
depends_on: []
files_modified:
  - package.json
  - .env.local
  - lib/supabase.ts
  - supabase/migrations/20260516000000_create_initial_schema.sql
autonomous: true
requirements_addressed: [CORE-02]
---

# Plan 1: Next.js + Supabase Setup & Tables

Configuração inicial do projeto Next.js com as variáveis de ambiente e criação das tabelas no Supabase via migração SQL.

<tasks>
<task>
<read_first>
- package.json
</read_first>
<action>
Instalar dependências do Supabase: `@supabase/supabase-js`, `@supabase/ssr`.
</action>
<acceptance_criteria>
- package.json contém `@supabase/supabase-js` e `@supabase/ssr`.
</acceptance_criteria>
</task>

<task>
<read_first>
- .env.local
</read_first>
<action>
Criar arquivo `.env.local` com placeholders para `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
</action>
<acceptance_criteria>
- Arquivo .env.local existe.
- Contém NEXT_PUBLIC_SUPABASE_URL.
</acceptance_criteria>
</task>

<task>
<read_first>
- lib/supabase.ts
</read_first>
<action>
Criar cliente do Supabase em `lib/supabase.ts` usando as variáveis de ambiente.
</action>
<acceptance_criteria>
- Arquivo lib/supabase.ts existe.
- Exporta createClient.
</acceptance_criteria>
</task>

<task>
<read_first>
- supabase/migrations/20260516000000_create_initial_schema.sql
</read_first>
<action>
Criar arquivo de migração SQL com as tabelas `tests` e `test_metrics`.
- `tests`: id, name, variation_a, variation_b, duration_days, created_at.
- `test_metrics`: id, test_id, metric_name, value_a, value_b, date, created_at.
</action>
<acceptance_criteria>
- Arquivo de migração existe em supabase/migrations/.
- Contém CREATE TABLE tests e CREATE TABLE test_metrics.
</acceptance_criteria>
</task>
</tasks>

## Verification
- [ ] Supabase client inicializado.
- [ ] SQL de migração definido para as tabelas principais.

## must_haves
- Conexão com banco de dados Supabase via env vars.
- Tabelas de testes e métricas prontas para o Dashboard.
