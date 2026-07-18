// app/dashboard/[classeId]/appel/page.tsx
'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Classe, Presence, Statut } from '@/types/dashboard'

function getDateDuJour() {
  return new Date().toISOString().split('T')[0]
}

export default function FaireAppelPage() {
  const { classeId } = useParams<{ classeId: string }>()
  const [classes] = useLocalStorage<Classe[]>('presence:classes', [])
  const [presences, setPresences] = useLocalStorage<Presence[]>('presence:presences', [])

  const dateDuJour = getDateDuJour()

  // Tous les Hooks avant tout return conditionnel.
  const [statuts, setStatuts] = useState<Record<string, Statut>>({})

  const classe = classes.find((c) => c.id === classeId)

  if (!classe) {
    return <p className="text-sm text-grey">Classe introuvable.</p>
  }

  // Réaffectation qui fige le type (Classe, sans undefined) pour tout le reste
  // du fichier : plus sûr qu'un `!` qui repose sur une promesse manuelle.
  const classeActuelle = classe

  const presencesDuJour = presences.filter(
    (p) => p.classeId === classeId && p.date === dateDuJour
  )
  const dejaValide = presencesDuJour.length > 0

  function getStatut(eleveId: string): Statut {
    if (dejaValide) {
      return presencesDuJour.find((p) => p.eleveId === eleveId)?.statut ?? 'Présent'
    }
    return statuts[eleveId] ?? 'Présent'
  }

  function changerStatut(eleveId: string, statut: Statut) {
    if (dejaValide) return
    setStatuts((prev) => ({ ...prev, [eleveId]: statut }))
  }

  const compteur = classeActuelle.eleves.reduce(
    (acc, eleve) => {
      const s = getStatut(eleve.id)
      if (s === 'Présent') acc.presents++
      else if (s === 'Absent') acc.absents++
      else acc.retards++
      return acc
    },
    { presents: 0, absents: 0, retards: 0 }
  )

  function handleValider() {
    const confirme = window.confirm(
      "Valider l'appel ? Une fois validée, la séance ne pourra plus être modifiée."
    )
    if (!confirme) return

    const nouvellesPresences: Presence[] = classeActuelle.eleves.map((eleve) => ({
      id: crypto.randomUUID(),
      classeId: classeId as string,
      eleveId: eleve.id,
      date: dateDuJour,
      statut: getStatut(eleve.id),
    }))

    setPresences([...presences, ...nouvellesPresences])
  }

  return (
    <div>
        <Link href={`/dashboard/${classeId}`} className="flex items-center gap-1 text-sm text-emeraude">
            <FiArrowLeft size={16} />
            {classeActuelle.nom}
        </Link>

        <h1 className="mt-4 text-3xl font-semibold uppercase">Faire l&apos;appel</h1>
        <p className="mt-2 text-grey">
            {dejaValide ? "Appel déjà validé pour aujourd'hui." : 'Marquez les présences, absences ou retards.'}
        </p>

        
        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            <div className="rounded-btn bg-emeraude-50 px-3 py-1.5 text-xs font-semibold text-emeraude sm:px-5 sm:py-2 sm:text-sm border-2">
                Présence(s) : {compteur.presents}
            </div>
            <div className="rounded-btn bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 sm:px-5 sm:py-2 sm:text-sm border-2">
                Absence(s) : {compteur.absents}
            </div>
            <div className="rounded-btn bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700 sm:px-5 sm:py-2 sm:text-sm border-2">
                Retard(s) : {compteur.retards}
            </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl bg-white">
            <table className="w-full min-w-125 text-left text-sm">
                <thead className="bg-white text-grey shadow">
                    <tr>
                    <th className="px-5 py-3">Nom</th>
                    <th className="px-5 py-3">Prénom</th>
                    <th className="px-5 py-3 text-right">Statut</th>
                    </tr>
                </thead>
                <tbody>

                    {classeActuelle.eleves.map((eleve) => {
                    const statutActuel = getStatut(eleve.id)
                    return (
                        <tr key={eleve.id} className="border-t border-cream">
                        <td className="px-5 py-3">{eleve.nom}</td>
                        <td className="px-5 py-3">{eleve.prenom}</td>
                        <td className="px-5 py-3">
                            <div className="flex justify-end gap-2">
                            {(['Présent', 'Absent', 'Retard'] as Statut[]).map((s) => (
                                <button
                                key={s}
                                type="button"
                                disabled={dejaValide}
                                onClick={() => changerStatut(eleve.id, s)}
                                className="rounded-pill border border-emeraude px-3 py-1 text-xs disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                                style={{
                                    backgroundColor: statutActuel === s ? '#126531' : 'transparent',
                                    color: statutActuel === s ? '#fff' : '#126531',
                                }}
                                >
                                {s}
                                </button>
                            ))}
                            </div>
                        </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>

        {!dejaValide && (
            <button onClick={handleValider} className="btn-primary mt-6 flex items-center gap-2 shadow-xl">
            <FiCheck size={18} />
            Valider l&apos;appel
            </button>
        )}
    </div>
  )
}