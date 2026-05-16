export const dynamic = 'force-dynamic'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { BarChart, Layers, Target } from 'lucide-react'

export default async function HomePage() {
  let count = 0
  try {
    const { count: c } = await supabase
      .from('tests')
      .select('*', { count: 'exact', head: true })
    count = c ?? 0
  } catch {
    // Supabase unavailable
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Bem-vindo ao <span className="text-primary">Vantage Analytics</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Otimize suas operações de Direct Response com tracking de alta precisão.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Testes Ativos</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{count || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">Acompanhando variações A/B</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50 border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturamento Total</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.580,25</div>
            <p className="text-xs text-muted-foreground mt-1">+12.5% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI Médio</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.82</div>
            <p className="text-xs text-muted-foreground mt-1">Performance consolidada</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-2xl border border-primary/10 bg-card/30 p-8 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Target className="w-8 h-8" />
        </div>
        <div className="max-w-md">
          <h2 className="text-xl font-bold mb-2">Selecione um teste na barra lateral</h2>
          <p className="text-muted-foreground">
            Para ver o detalhamento completo de métricas, ROAS, CPA e o funil de conversão, escolha uma das variações ativas à esquerda.
          </p>
        </div>
      </div>
    </div>
  )
}
