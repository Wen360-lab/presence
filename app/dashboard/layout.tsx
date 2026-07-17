// app/dashboard/layout.tsx
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  // null = vérification en cours, true = autorisé. On ne redirige jamais
  // sur la base d'une valeur par défaut supposée : on attend la vraie lecture.
  const [estAutorise, setEstAutorise] = useState<boolean | null>(null)

useEffect(() => {
  const connecte = window.localStorage.getItem('presence:isLoggedIn') === 'true'

  if (!connecte) {
    router.push('/connexion')
  } else {
    // Lecture ponctuelle d'une donnée externe (localStorage) au montage : cas
    // explicitement prévu par React, pas un anti-pattern de synchronisation d'état interne.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEstAutorise(true)
  }
}, [router])

  // Tant qu'on n'a pas confirmé positivement l'autorisation, on n'affiche rien.
  if (!estAutorise) return null

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 bg-cream px-8 py-10">{children}</main>
    </div>
  )
}