'use server'

import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function createTest(formData: FormData) {
  const name = formData.get('name') as string
  const variation_a = formData.get('variation_a') as string
  const variation_b = formData.get('variation_b') as string
  const duration_days = parseInt(formData.get('duration_days') as string)

  if (!name || !variation_a || !variation_b || !duration_days) {
    return
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
      return
    }

    testId = data.id
  } catch (err) {
    console.error('Unexpected error creating test:', err)
    return
  }

  redirect(`/tests/${testId}`)
}
