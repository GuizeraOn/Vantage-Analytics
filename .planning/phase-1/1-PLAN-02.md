---
phase: 1
slug: setup-core
wave: 1
depends_on: []
files_modified:
  - components.json
  - tailwind.config.ts
  - app/globals.css
  - app/layout.tsx
autonomous: true
requirements_addressed: [CORE-03]
---

# Plan 2: Theme Setup & Shared Components

Configuração do Shadcn com o tema Deep Purple e inicialização do layout base.

<tasks>
<task>
<read_first>
- package.json
</read_first>
<action>
Instalar Shadcn CLI e inicializar: `npx shadcn-ui@latest init`. Usar as configurações de App Router e TypeScript.
</action>
<acceptance_criteria>
- Arquivo components.json existe.
- Pasta components/ui existe.
</acceptance_criteria>
</task>

<task>
<read_first>
- app/globals.css
</read_first>
<action>
Aplicar as variáveis HSL do tema Deep Purple em `app/globals.css` conforme o UI-SPEC:
- --background: 260 60% 10%
- --primary: 270 70% 60%
- --card: 260 40% 15%
</action>
<acceptance_criteria>
- globals.css contém as variáveis HSL especificadas.
</acceptance_criteria>
</task>

<task>
<read_first>
- app/layout.tsx
</read_first>
<action>
Configurar a fonte Inter no layout base e aplicar classes do Tailwind no body para o background escuro.
</action>
<acceptance_criteria>
- layout.tsx usa Inter da next/font/google.
- Body tem classe bg-background text-foreground.
</acceptance_criteria>
</task>
</tasks>

## Verification
- [ ] Tema visual corresponde ao Deep Purple.
- [ ] Shadcn inicializado e pronto para uso.

## must_haves
- Identidade visual "Deep Purple" ativa no CSS global.
