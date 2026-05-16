import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  variationA?: string | number
  variationB?: string | number
  prefix?: string
  suffix?: string
  type?: 'currency' | 'percent' | 'number'
}

export function MetricCard({
  title,
  value,
  variationA,
  variationB,
  prefix = '',
  suffix = '',
  type = 'number'
}: MetricCardProps) {
  
  const formatValue = (val: any) => {
    if (typeof val === 'number') {
      if (type === 'currency') return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      if (type === 'percent') return `${val.toFixed(2)}%`
      return val.toLocaleString('pt-BR')
    }
    return val
  }

  // Calculate delta if variations provided
  const delta = variationA && variationB && typeof variationA === 'number' && typeof variationB === 'number'
    ? ((variationB - variationA) / variationA) * 100
    : null

  const isPositive = delta && delta > 0

  return (
    <Card className="bg-card/40 backdrop-blur-md border-primary/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold text-foreground">
            {formatValue(value)}
          </div>
          
          {(variationA !== undefined || variationB !== undefined) && (
            <div className="flex items-center gap-4 mt-2 pt-2 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase">Var A</span>
                <span className="text-sm font-semibold opacity-80">{formatValue(variationA)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase">Var B</span>
                <span className="text-sm font-semibold text-primary">{formatValue(variationB)}</span>
              </div>
              
              {delta !== null && (
                <div className={cn(
                  "ml-auto flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-full",
                  isPositive ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                )}>
                  {isPositive ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />}
                  {Math.abs(delta).toFixed(1)}%
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
