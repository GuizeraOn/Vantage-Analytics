import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { BarChart3, LayoutDashboard, PlusCircle, Target } from 'lucide-react'
import Link from 'next/link'

export async function Sidebar() {
  let tests: { id: string; name: string }[] = []
  try {
    const { data } = await supabase
      .from('tests')
      .select('id, name')
      .order('created_at', { ascending: false })
    tests = data ?? []
  } catch {
    // Supabase unavailable at build time — render empty sidebar
  }

  return (
    <aside className="w-64 border-r border-primary/10 bg-card/20 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Target className="w-6 h-6" />
          <span>Vantage Analytics</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-8 overflow-y-auto">
        <div>
          <div className="text-[10px] uppercase font-bold text-muted-foreground px-2 mb-2 tracking-widest">
            Menu
          </div>
          <div className="space-y-1">
            <Link 
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </Link>
            <Link 
              href="/tests/new"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary"
            >
              <PlusCircle className="w-4 h-4" />
              Novo Teste
            </Link>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase font-bold text-muted-foreground px-2 mb-2 tracking-widest">
            Testes Ativos
          </div>
          <div className="space-y-1">
            {tests?.map((test) => (
              <Link 
                key={test.id}
                href={`/tests/${test.id}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-foreground transition-colors group"
              >
                <BarChart3 className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span className="truncate">{test.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-primary/10">
        <div className="bg-primary/5 rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2">Plano Atual</p>
          <p className="text-sm font-bold text-primary">Premium Partner</p>
        </div>
      </div>
    </aside>
  )
}
