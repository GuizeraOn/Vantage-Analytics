'use client'

import { createTest } from '@/app/actions/tests'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { useActionState } from 'react'

const initialState = { error: '', loading: false }

export default function NewTestPage() {
  const [state, formAction, isPending] = useActionState(createTest, initialState)

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Registrar Novo Teste
          </CardTitle>
          <CardDescription>
            Configure as variações e a duração do seu novo teste de funil.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Teste</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ex: VSL Headline Test - Maio"
                required
                disabled={isPending}
                className="bg-background/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="variation_a">Variação A (Controle)</Label>
                <Input
                  id="variation_a"
                  name="variation_a"
                  placeholder="Ex: Original"
                  required
                  disabled={isPending}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="variation_b">Variação B (Teste)</Label>
                <Input
                  id="variation_b"
                  name="variation_b"
                  placeholder="Ex: Nova Headline"
                  required
                  disabled={isPending}
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration_days">Duração Estimada (Dias)</Label>
              <Input
                id="duration_days"
                name="duration_days"
                type="number"
                placeholder="7"
                min="1"
                required
                disabled={isPending}
                className="bg-background/50"
              />
            </div>

            {state?.error && (
              <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
                ⚠️ {state.error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full font-semibold shadow-lg shadow-primary/20"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Criando Teste...
                </>
              ) : (
                'Criar Teste e Abrir Dashboard'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
