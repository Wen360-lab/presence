// components/dashboard/Sidebar.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { FiHome, FiLogOut } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Account } from '@/types/auth'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [account] = useLocalStorage<Account | null>('presence:account', null)

  // "Mes classes" est actif sur /dashboard, mais aussi sur ses sous-pages
  // (détail d'une classe, appel, suivi), puisqu'on y revient toujours via ce lien.
  const estActif = pathname.startsWith('/dashboard')

  function handleDeconnexion() {
    window.localStorage.removeItem('presence:isLoggedIn')
    router.push('/connexion')
  }

  return (
    <aside className="flex w-55 shrink-0 flex-col items-center justify-between bg-emeraude px-5 py-6 text-white">
      <div className='flex flex-col items-center justify-center'>
        {/* Logo */}
        <Image src="/logoPresence.svg" alt="Présence" width={110} height={110} className="object-contain" />
        <hr className="my-5 border-white/30 w-full" />

        {/* Profil de l'enseignant connecté */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 h-16 w-16 rounded-full bg-white" />
          <p className="text-sm font-semibold text-white uppercase">{account?.nom ?? 'Enseignant'}</p>
          <p className="text-xs text-white/80">{account?.email ?? ''}</p>
        </div>

        {/* Navigation : un seul item*/}
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-4 rounded-btn px-3 py-2 text-sm shadow-xl"
          style={{ backgroundColor: estActif ? 'rgba(255,255,255,0.15)' : 'transparent' }}
        >
          <FiHome size={18} />
          Mes classes
        </Link>
      </div>
      {/* L'illustration */}
      <Image src="/Teacherstudent.svg" alt="illustration de prof avec ub élève" width={130} height={130} className="object-contain" />

      <button onClick={handleDeconnexion} 
        className="flex items-center justify-center gap-4 rounded-btn px-3 py-2 text-sm cursor-pointer shadow-xl"
        style={{ backgroundColor: estActif ? 'rgba(255,255,255,0.15)' : 'transparent' }}
      >
        <FiLogOut size={18} />
        Déconnexion
      </button>
    </aside>
  )
}