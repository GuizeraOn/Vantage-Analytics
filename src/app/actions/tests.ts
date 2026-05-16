'use server'

import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function createTest(_prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const variation_a = formData.get('variation_a') as string
  const variation_b = formData.get('variation_b') as string
  const duration_days = parseInt(formData.get('duration_days') as string)

  if (!name || !variation_a || !variation_b || !duration_days) {
    return { error: 'Preencha todos os campos.' }
  }

  let testId: string

  try {
    const { data, error } = await supabase
      .from('tests')
      .insert([{ name, variation_a, variation_b, duration_days }])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error.message)
      return { error: `Erro ao salvar: ${error.message}` }
    }

    testId = data.id
  } catch (err: any) {
    console.error('Unexpected error:', err)
    return { error: `Erro inesperado: ${err?.message || 'Tente novamente.'}` }
  }

  redirect(`/tests/${testId}`)
}
