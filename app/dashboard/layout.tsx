// app/dashboard/layout.tsx
'use client'
import { useEffect, useSyncExternalStore } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'

// Fonctions requises par useSyncExternalStore :

// 1. subscribe : on ne surveille pas de changement en direct ici (pas besoin
//    de réagir si le localStorage change dans un autre onglet), donc no-op.
function subscribe() {
  return () => {}
}

// 2. getSnapshot : la vraie lecture, côté client uniquement.
function getSnapshot() {
  return window.localStorage.getItem('presence:isLoggedIn') === 'true'
}

// 3. getServerSnapshot : valeur utilisée pendant le rendu serveur (SSR),
//    où `window` n'existe pas. On suppose "non connecté" par défaut le temps
//    que le client prenne le relais.
function getServerSnapshot() {
  return false
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  // Lit la donnée externe (localStorage) sans jamais appeler setState manuellement.
  const estAutorise = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // L'effect ne fait plus QUE la redirection (une navigation, pas un setState) :
  // ça respecte la règle ESLint, qui ne s'oppose pas à router.push() ici.
  useEffect(() => {
    if (!estAutorise) {
      router.push('/connexion')
    }
  }, [estAutorise, router])

  if (!estAutorise) return null

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-cream px-8 py-10">{children}</main>
    </div>
  )
}