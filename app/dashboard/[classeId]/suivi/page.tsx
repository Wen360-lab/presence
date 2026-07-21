// app/dashboard/[classeId]/suivi/page.tsx
'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiDownload } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Classe, Presence, Statut } from '@/types/dashboard'

const styleStatut: Record<Statut, string> = {
  Présent: 'bg-emeraude-50 text-emeraude',
  Absent: 'bg-red-50 text-red-700',
  Retard: 'bg-yellow-50 text-yellow-700',
}

function getDateDuJour() {
  return new Date().toISOString().split('T')[0]
}

// "2026-07-13" → "13/07/2026", pour l'affichage et le PDF.
function formaterDate(date: string) {
  const [annee, mois, jour] = date.split('-')
  return `${jour}/${mois}/${annee}`
}

export default function SuiviSeancePage() {
  const { classeId } = useParams<{ classeId: string }>()
  const [classes] = useLocalStorage<Classe[]>('presence:classes', [])
  const [presences] = useLocalStorage<Presence[]>('presence:presences', [])

  // Date sélectionnée par l'enseignant, "aujourd'hui" par défaut.
  const [dateChoisie, setDateChoisie] = useState(getDateDuJour())

  const classe = classes.find((c) => c.id === classeId)

  if (!classe) {
    return <p className="text-sm text-grey">Classe introuvable.</p>
  }

  // Réaffectation qui fige le type (Classe, sans undefined) pour tout le reste
  // du fichier : évite l'erreur TypeScript liée aux closures.
  const classeActuelle = classe

  // Registre : je garde les présences de cette classe, à cette date précise,
  // puis je relie chaque ligne à l'élève correspondant pour afficher son nom.
  const registre = presences
    .filter((p) => p.classeId === classeId && p.date === dateChoisie)
    .map((p) => {
      const eleve = classeActuelle.eleves.find((e) => e.id === p.eleveId)
      return { ...p, nom: eleve?.nom ?? '—', prenom: eleve?.prenom ?? '—' }
    })

  async function exporterPDF() {
    // Import dynamique : jsPDF ne fonctionne que côté navigateur (utilise `window`),
    // donc on évite de le charger pendant le rendu serveur de la page.
    const { default: jsPDF } = await import('jspdf')
    const autoTable = (await import('jspdf-autotable')).default

    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text(`Registre de présence — ${classeActuelle.nom}`, 14, 18)
    doc.setFontSize(11)
    doc.text(`Séance du ${formaterDate(dateChoisie)}`, 14, 26)

    autoTable(doc, {
      startY: 34,
      head: [['Nom', 'Prénom', 'Statut']],
      body: registre.map((r) => [r.nom, r.prenom, r.statut]),
      headStyles: { fillColor: [18, 101, 49] }, // vert émeraude
    })

    doc.save(`registre_${classeActuelle.nom}_${dateChoisie}.pdf`)
  }

  return (
    <div>
      <Link href={`/dashboard/${classeId}`} className="flex items-center gap-1 text-sm text-emeraude">
        <FiArrowLeft size={16} />
        {classeActuelle.nom}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold uppercase">Suivi</h1>
      <p className="mt-2 text-grey">Exportez le registre de présence d&apos;une séance.</p>

      {/* Sélecteur de date */}
      <input
        type="date"
        value={dateChoisie}
        onChange={(e) => setDateChoisie(e.target.value)}
        className="mt-4 rounded-btn border border-emeraude/40 px-4 py-2 text-sm outline-none focus:border-emeraude"
      />

      {/* Registre de la séance choisie */}
      <div className="mt-6 overflow-x-auto rounded-2xl bg-white">
        <table className="w-full min-w-100 text-left text-sm">
          <thead className="bg-cream text-grey">
            <tr>
              <th className="px-5 py-3">Nom</th>
              <th className="px-5 py-3">Prénom</th>
              <th className="px-5 py-3 text-right">Statut</th>
            </tr>
          </thead>
          <tbody>
            {registre.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-5 py-6 text-center text-grey">
                  Aucun appel enregistré pour cette date.
                </td>
              </tr>
            ) : (
              registre.map((r) => (
                <tr key={r.id} className="border-t border-cream">
                  <td className="px-5 py-3">{r.nom}</td>
                  <td className="px-5 py-3">{r.prenom}</td>
                  <td className="px-5 py-3 text-right">
                    <span className={`rounded-pill px-3 py-1 text-xs font-semibold ${styleStatut[r.statut]}`}>
                      {r.statut === 'Retard' ? 'En retard' : `${r.statut}(e)`}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Export désactivé si aucune donnée pour cette date */}
      <button
        onClick={exporterPDF}
        disabled={registre.length === 0}
        className="btn-primary mt-6 flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiDownload size={18} />
        Exporter en PDF
      </button>
    </div>
  )
}