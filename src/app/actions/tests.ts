'use server'

import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function createTest(formData: FormData) {
  const name = formData.get('name') as string
  const variation_a = formData.get('variation_a') as string
  const variation_b = formData.get('variation_b') as string
  const duration_days = parseInt(formData.get('duration_days') as string)

  const { data, error } = await supabase
    .from('tests')
    .insert([
      {
        name,
        variation_a,
        variation_b,
        duration_days,
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error creating test:', error)
    return
  }

  // Redirect to the test dashboard (to be implemented in Phase 2)
  // For now, redirect to home or the new test page itself with success
  redirect(`/tests/${data.id}`)
}
