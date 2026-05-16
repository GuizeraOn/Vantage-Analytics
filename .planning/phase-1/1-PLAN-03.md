---
phase: 1
slug: setup-core
wave: 2
depends_on: [PLAN-01, PLAN-02]
files_modified:
  - app/tests/new/page.tsx
  - app/actions/tests.ts
autonomous: true
requirements_addressed: [CORE-01]
---

# Plan 3: Test Creation Form & Flow

Implementação do formulário de criação de testes e a Server Action para persistência no Supabase.

<tasks>
<task>
<read_first>
- app/tests/new/page.tsx
</read_first>
<action>
Criar a página de novo teste com um formulário centralizado usando Shadcn (Card, Input, Button).
Campos: Name, Variation A Name, Variation B Name, Duration (Days).
</action>
<acceptance_criteria>
- app/tests/new/page.tsx existe.
- Renderiza formulário com os 4 campos requeridos.
</acceptance_criteria>
</task>

<task>
<read_first>
- app/actions/tests.ts
</read_first>
<action>
Criar Server Action `createTest` que recebe os dados do formulário e insere na tabela `tests` do Supabase.
Incluir redirecionamento para o dashboard após o sucesso.
</action>
<acceptance_criteria>
- app/actions/tests.ts existe.
- Contém função createTest com 'use server'.
- Usa supabase.from('tests').insert().
</acceptance_criteria>
</task>

<task>
<read_first>
- app/tests/new/page.tsx
</read_first>
<action>
Conectar o formulário à Server Action `createTest` e implementar feedback de loading no botão.
</action>
<acceptance_criteria>
- Formulário usa action={createTest}.
</acceptance_criteria>
</task>
</tasks>

## Verification
- [ ] Formulário funcional e visualmente alinhado.
- [ ] Novos testes são salvos no banco de dados.

## must_haves
- Registro de testes persistente no Supabase.
- Fluxo de redirecionamento pós-criação.
