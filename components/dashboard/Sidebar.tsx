// components/dashboard/Sidebar.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { FiHome, FiLogOut, FiMenu, FiX, FiUser } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Account } from '@/types/auth'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [account] = useLocalStorage<Account | null>('presence:account', null)

  // Contrôle l'ouverture de la sidebar sur mobile (fermée par défaut).
  const [isOpen, setIsOpen] = useState(false)

  // "Mes classes" est actif sur /dashboard, mais aussi sur ses sous-pages
  // (détail d'une classe, appel, suivi), puisqu'on y revient toujours via ce lien.
  const estActif = pathname.startsWith('/dashboard')

  function handleDeconnexion() {
    window.localStorage.removeItem('presence:isLoggedIn')
    router.push('/connexion')
  }

  // Contenu de la sidebar, identique sur mobile et desktop : factorisé pour éviter
  // de dupliquer logo/profil/nav/illustration à deux endroits.
  const contenu = (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <Image src="/logoPresence.svg" alt="Présence" width={110} height={110} className="object-contain" />
        <hr className="my-5 w-full border-white/30" />

        {/* Profil de l'enseignant connecté */}
        <div className="mb-6 flex flex-col items-center text-center">
          {/* Le profil de l'ensigant */}
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-emeraude">
            <FiUser size={28} />
          </div>
          <p className="text-sm font-semibold uppercase text-white">{account?.nom ?? 'Enseignant'}</p>
          <p className="text-xs text-white/80">{account?.email ?? ''}</p>
        </div>

        {/* Navigation : un seul item */}
        <Link
          href="/dashboard"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center gap-4 rounded-btn px-3 py-2 text-sm shadow-xl"
          style={{ backgroundColor: estActif ? 'rgba(255,255,255,0.15)' : 'transparent' }}
        >
          <FiHome size={18} />
          Mes classes
        </Link>
      </div>

      {/* L'illustration */}
      <Image
        src="/Teacherstudent.svg"
        alt="illustration de prof avec un élève"
        width={130}
        height={130}
        className="object-contain"
      />

      <button
        onClick={handleDeconnexion}
        className="flex items-center justify-center gap-4 rounded-btn px-3 py-2 text-sm shadow-xl cursor-pointer"
        style={{ backgroundColor: estActif ? 'rgba(255,255,255,0.15)' : 'transparent' }}
      >
        <FiLogOut size={18} />
        Déconnexion
      </button>
    </>
  )

  return (
    <>
      {/* Barre supérieure visible uniquement sur mobile : logo + burger */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-emeraude px-5 py-4 text-white lg:hidden">
        <Image src="/logoPresence.svg" alt="Présence" width={90} height={45} className="object-contain" />
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Sidebar desktop : toujours visible à partir de lg */}
      <aside className="hidden w-55 shrink-0 flex-col items-center justify-between bg-emeraude px-5 py-6 text-white lg:flex lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        {contenu}
      </aside>

      {/* Sidebar mobile : overlay plein écran, affichée seulement si isOpen */}
      {isOpen && (
        <aside className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-emeraude px-5 py-6 text-white lg:hidden">
          {contenu}
        </aside>
      )}
    </>
  )
}