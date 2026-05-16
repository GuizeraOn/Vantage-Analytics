# Phase 1: Setup & Core - Plan

## Goal
Configurar projeto Next.js, Shadcn (com tema), Supabase e registro básico de testes.

## Requirements Covered
- CORE-01: Usuário pode registrar um novo teste de funil
- CORE-02: Sistema armazena os dados no Supabase
- CORE-03: Aplicação usa o tema especificado Shadcn

## Step 1: Initialize Next.js & Shadcn
- **Task**: Criar o projeto Next.js e inicializar o shadcn/ui.
- **Files to create/modify**: `package.json`, `tailwind.config.ts`, `globals.css`, `components.json`
- **Details**:
  - Rodar `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
  - Inicializar o shadcn/ui com a cor base violet/zinc.
  - Substituir as cores no `globals.css` pela paleta Deep Purple extraída no UI-SPEC.
  - Instalar lucide-react.

## Step 2: Supabase Setup
- **Task**: Configurar o cliente Supabase e estrutura de tabelas.
- **Files to create/modify**: `src/lib/supabase/client.ts`, `supabase/migrations/00_init.sql`, `.env.local`
- **Details**:
  - Instalar `@supabase/ssr` e `@supabase/supabase-js`.
  - Criar script SQL para a tabela `tests` (id, name, var_a, var_b, duration_days, created_at, status).
  - Configurar client utilitario para components client-side e server-side.

## Step 3: Registration Form Component
- **Task**: Criar o formulário de registro de novos testes.
- **Files to create/modify**: `src/app/page.tsx`, `src/components/TestForm.tsx`
- **Details**:
  - Instalar shadcn components necessários: `button`, `input`, `label`, `card`, `form`.
  - Criar o componente de formulário com validação simples para os campos obrigatórios.
  - Integrar a ação de "Salvar" conectando ao Supabase para insert.
  - Após sucesso, limpar formulário ou mostrar feedback visual.

## Definition of Done
- Projeto Next.js roda na porta 3000.
- Cores do tema Deep Purple aplicadas globalmente.
- O usuário consegue acessar a tela inicial e submeter o formulário.
- Os dados do formulário aparecem com sucesso na tabela `tests` do Supabase.
