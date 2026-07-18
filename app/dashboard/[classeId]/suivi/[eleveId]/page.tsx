// app/dashboard/[classeId]/suivi/[eleveId]/page.tsx
'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Classe, Presence, Statut } from '@/types/dashboard'

// Couleurs par statut, réutilisées pour le badge du tableau.
const styleStatut: Record<Statut, string> = {
  Présent: 'bg-emeraude-50 text-emeraude',
  Absent: 'bg-red-50 text-red-700',
  Retard: 'bg-yellow-50 text-yellow-700',
}

// Formatte "2026-07-13" en "13/07/2026", pour l'affichage.
function formaterDate(date: string) {
  const [annee, mois, jour] = date.split('-')
  return `${jour}/${mois}/${annee}`
}

export default function SuiviElevePage() {
  const { classeId, eleveId } = useParams<{ classeId: string; eleveId: string }>()
  const [classes] = useLocalStorage<Classe[]>('presence:classes', [])
  const [presences] = useLocalStorage<Presence[]>('presence:presences', [])

  const classe = classes.find((c) => c.id === classeId)
  const eleve = classe?.eleves.find((e) => e.id === eleveId)

  if (!classe || !eleve) {
    return <p className="text-sm text-grey">Élève introuvable.</p>
  }

  // Historique : je garde uniquement les présences de cet élève,
  // triées de la plus récente à la plus ancienne.
  const historique = presences
    .filter((p) => p.eleveId === eleveId)
    .sort((a, b) => b.date.localeCompare(a.date))

  // Statistiques : je compte chaque statut dans l'historique de cet élève.
  const stats = historique.reduce(
    (acc, p) => {
      if (p.statut === 'Présent') acc.presences++
      else if (p.statut === 'Absent') acc.absences++
      else acc.retards++
      return acc
    },
    { presences: 0, absences: 0, retards: 0 }
  )

  return (
    <div>
      <Link href={`/dashboard/${classeId}`} className="flex items-center gap-1 text-sm text-emeraude">
        <FiArrowLeft size={16} />
        {classe.nom}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold uppercase">Suivi d&apos;un élève</h1>
      <p className="mt-2 text-grey">Consultez l&apos;historique et les statistiques d&apos;assiduité.</p>

      <p className="font-oswald mt-6 text-xl font-semibold uppercase">
        {eleve.nom} {eleve.prenom}
      </p>

      {/* Statistiques */}
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
        <div className="rounded-btn bg-emeraude-50 px-3 py-1.5 text-xs font-semibold text-emeraude sm:px-5 sm:py-2 sm:text-sm shadow-xl border-2">
          Présence(s) : {stats.presences}
        </div>
        <div className="rounded-btn bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 sm:px-5 sm:py-2 sm:text-sm border-2">
          Absence(s) : {stats.absences}
        </div>
        <div className="rounded-btn bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700 sm:px-5 sm:py-2 sm:text-sm border-2">
          Retard(s) : {stats.retards}
        </div>
      </div>

      {/* Historique, scrollable horizontalement sur mobile */}
      <div className="mt-6 overflow-x-auto rounded-2xl bg-white">
        <table className="w-full min-w-100 text-left text-sm">
          <thead className="bg-white text-grey shadow">
            <tr>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3 text-right">Statut</th>
            </tr>
          </thead>
          <tbody>
            {historique.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-5 py-6 text-center text-grey">
                  Aucune séance enregistrée pour le moment.
                </td>
              </tr>
            ) : (
              historique.map((p) => (
                <tr key={p.id} className="border-t border-cream">
                  <td className="px-5 py-3">{formaterDate(p.date)}</td>
                  <td className="px-5 py-3 text-right">
                    <span className={`rounded-pill px-3 py-1 text-xs font-semibold ${styleStatut[p.statut]}`}>
                      {p.statut === 'Retard' ? 'En retard' : `${p.statut}(e)`}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}