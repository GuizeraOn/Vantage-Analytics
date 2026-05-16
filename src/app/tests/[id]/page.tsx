import { FunnelChart } from '@/components/dashboard/funnel-chart'
import { MetricCard } from '@/components/dashboard/metric-card'
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export default async function TestDashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Fetch test details
  const { data: test, error: testError } = await supabase
    .from('tests')
    .select('*')
    .eq('id', id)
    .single()

  if (testError || !test) {
    return notFound()
  }

  // Fetch metrics
  const { data: metrics, error: metricsError } = await supabase
    .from('test_metrics')
    .select('*')
    .eq('test_id', id)

  // Transform metrics for easier consumption
  const metricMap = metrics?.reduce((acc: any, m: any) => {
    acc[m.metric_name] = m
    return acc
  }, {}) || {}

  // Calculate high-level metrics
  const calculateROAS = (rev: number, spend: number) => spend > 0 ? rev / spend : 0
  const calculateROI = (rev: number, spend: number) => spend > 0 ? (rev - spend) / spend : 0
  const calculateCPA = (spend: number, sales: number) => sales > 0 ? spend / sales : 0

  const revA = metricMap['Faturamento Bruto']?.value_a || 0
  const revB = metricMap['Faturamento Bruto']?.value_b || 0
  const spendA = metricMap['Gastos Anúncios']?.value_a || 0
  const spendB = metricMap['Gastos Anúncios']?.value_b || 0
  const salesA = metricMap['Vendas Aprovadas']?.value_a || 0
  const salesB = metricMap['Vendas Aprovadas']?.value_b || 0

  const roasA = calculateROAS(revA, spendA)
  const roasB = calculateROAS(revB, spendB)
  const roiA = calculateROI(revA, spendA)
  const roiB = calculateROI(revB, spendB)
  const cpaA = calculateCPA(spendA, salesA)
  const cpaB = calculateCPA(spendB, salesB)

  // Funnel Data
  const funnelStages = [
    'Cliques',
    'Visitas Página',
    'ICs',
    'Vendas Iniciadas',
    'Vendas Aprovadas'
  ]

  const funnelData = funnelStages.map(stage => ({
    stage,
    variationA: metricMap[stage]?.value_a || 0,
    variationB: metricMap[stage]?.value_b || 0
  }))

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {test.name}
        </h1>
        <p className="text-muted-foreground">
          Dashboard de performance comparando {test.variation_a} vs {test.variation_b}
        </p>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard 
          title="ROAS" 
          value={roasB} 
          variationA={roasA} 
          variationB={roasB}
          type="number"
        />
        <MetricCard 
          title="ROI" 
          value={roiB} 
          variationA={roiA} 
          variationB={roiB}
          type="number"
        />
        <MetricCard 
          title="CPA" 
          value={cpaB} 
          variationA={cpaA} 
          variationB={cpaB}
          type="currency"
        />
        <MetricCard 
          title="Faturamento Bruto" 
          value={revB} 
          variationA={revA} 
          variationB={revB}
          type="currency"
        />
        <MetricCard 
          title="Gastos Anúncios" 
          value={spendB} 
          variationA={spendA} 
          variationB={spendB}
          type="currency"
        />
        <MetricCard 
          title="Vendas Aprovadas" 
          value={salesB} 
          variationA={salesA} 
          variationB={salesB}
        />
      </div>

      {/* Funnel Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FunnelChart data={funnelData} />
        
        {/* Quick Stats/Summary Card */}
        <div className="space-y-6">
          <MetricCard 
            title="Margem de Lucro" 
            value={((revB - spendB) / revB) * 100}
            type="percent"
          />
          <MetricCard 
            title="Ticket Médio (ARPU)" 
            value={salesB > 0 ? revB / salesB : 0}
            type="currency"
          />
        </div>
      </div>
    </div>
  )
}
