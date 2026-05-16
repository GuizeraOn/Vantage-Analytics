import { createTest } from '@/app/actions/tests'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewTestPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Registrar Novo Teste
          </CardTitle>
          <CardDescription>
            Configure as variações e a duração do seu novo teste de funil.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createTest} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Teste</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ex: VSL Headline Test - Maio"
                required
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
                className="bg-background/50"
              />
            </div>

            <Button type="submit" className="w-full font-semibold shadow-lg shadow-primary/20">
              Criar Teste e Abrir Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
