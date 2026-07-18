// app/dashboard/page.tsx
'use client'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import ClassCard from '@/components/dashboard/ClassCard'
import type { Classe } from '@/types/dashboard'

export default function MesClassesPage() {
  const [classes] = useLocalStorage<Classe[]>('presence:classes', [])

  return (
    <div>
      <h1 className="text-3xl font-semibold uppercase">Mes classes</h1>
      <p className="mt-2 text-grey">Gérer intelligemment chaque salle de classe.</p>

      <Link href="/dashboard/nouvelle-classe" className="btn-primary mt-6 inline-flex items-center gap-2 shadow-xl">
        <FiPlus size={18} />
        Nouvelle classe
      </Link>

      {/* Cadre vert qui regroupe les cartes, fidèle à la maquette Figma */}
      <div className="mt-8 rounded-2xl bg-emeraude p-6">
        {classes.length === 0 ? (
          <p className="text-center text-sm text-white/80">
            Aucune classe pour le moment. Créez votre première classe pour commencer.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {classes.map((classe) => (
              <ClassCard key={classe.id} classe={classe} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}