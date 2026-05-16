'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

interface FunnelData {
  stage: string
  variationA: number
  variationB: number
}

interface FunnelChartProps {
  data: FunnelData[]
}

export function FunnelChart({ data }: FunnelChartProps) {
  return (
    <Card className="bg-card/40 backdrop-blur-md border-primary/10 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Funil de Conversão Comparativo</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="stage" 
              type="category" 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              width={100}
            />
            <Tooltip 
              cursor={{ fill: '#ffffff05' }}
              contentStyle={{ 
                backgroundColor: '#1a142e', 
                border: '1px solid #4c3e7b',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar 
              dataKey="variationA" 
              name="Variação A" 
              fill="#4c3e7b" 
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="variationB" 
              name="Variação B" 
              fill="#9d4edd" 
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
