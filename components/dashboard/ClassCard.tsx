// components/dashboard/ClassCard.tsx
'use client'
import Link from 'next/link'
import type { Classe } from '@/types/dashboard'

type ClassCardProps = {
  classe: Classe
}

export default function ClassCard({ classe }: ClassCardProps) {
  return (
    // Toute la carte est cliquable, sans bouton d'action visible dessus
    <Link
      href={`/dashboard/${classe.id}`}
      className="block rounded-xl bg-white p-5 transition hover:shadow-md"
    >
      <p className="font-oswald text-lg font-semibold text-black">{classe.nom}</p>
      <p className="mt-1 text-sm text-grey">
        {classe.niveau} · {classe.matiere}
      </p>
      <span className="badge-eyebrow mt-4 inline-block">{classe.eleves.length} élèves</span>
    </Link>
  )
}