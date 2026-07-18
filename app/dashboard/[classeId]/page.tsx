'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiPlus, FiEdit2, FiTrash2, FiClock, FiArrowLeft } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import Modal from '@/components/ui/Modal'
import IconInput from '@/components/ui/IconInput'
import type { Classe, Eleve } from '@/types/dashboard'

export default function DetailClassePage() {
  // Récupère l'identifiant de la classe depuis l'URL (/dashboard/[classeId]).
  const { classeId } = useParams<{ classeId: string }>()
  const [classes, setClasses] = useLocalStorage<Classe[]>('presence:classes', [])

  const router = useRouter()

  // null = modale fermée. Un objet Eleve = modale ouverte en mode édition.
  // "nouveau" = modale ouverte en mode ajout.
  const [modaleElleve, setModaleEleve] = useState<Eleve | 'nouveau' | null>(null)
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')

  const classe = classes.find((c) => c.id === classeId)

  // Si la classe n'existe pas (id invalide dans l'URL), on évite un crash.
  if (!classe) {
    return <p className="text-sm text-grey">Classe introuvable.</p>
  }

  // À ce stade, `classe` est garanti défini. On le réaffecte à une nouvelle
  // constante pour que TypeScript retienne ce typage même dans les fonctions
  // déclarées plus bas (closures), qui sinon perdraient cette garantie.
  const classeActuelle = classe


  // Met à jour une classe précise dans le tableau global, puis persiste
  // automatiquement via useLocalStorage.
  function updateClasse(eleves: Eleve[]) {
    setClasses(classes.map((c) => (c.id === classeId ? { ...c, eleves } : c)))
  }

  function ouvrirAjout() {
    setNom('')
    setPrenom('')
    setModaleEleve('nouveau')
  }

  function ouvrirEdition(eleve: Eleve) {
    setNom(eleve.nom)
    setPrenom(eleve.prenom)
    setModaleEleve(eleve)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (modaleElleve === 'nouveau') {
      const nouvelEleve: Eleve = { id: crypto.randomUUID(), nom, prenom }
      updateClasse([...classeActuelle.eleves, nouvelEleve])
    } else if (modaleElleve) {
      updateClasse(
        classeActuelle.eleves.map((e) => (e.id === modaleElleve.id ? { ...e, nom, prenom } : e))
      )
    }

    setModaleEleve(null)
  }

  function handleSupprimer(id: string, eleve: Eleve) {
    const confirme = window.confirm(
      `Supprimer ${eleve.prenom} ${eleve.nom} ? Cette action est irréversible.`
    )
    if (confirme) {
      updateClasse(classeActuelle.eleves.filter((e) => e.id !== id))
    }
  }

  function handleSupprimerClasse() {
  const confirme = window.confirm(
    `Supprimer la classe "${classeActuelle.nom}" ? Tous les élèves et l'historique associés seront perdus. Cette action est irréversible.`
  )
  if (confirme) {
    setClasses(classes.filter((c) => c.id !== classeId))
    router.push('/dashboard')
  }
}

  return (
    <div>
      <Link href="/dashboard" className="flex items-center gap-1 text-sm text-emeraude">
        <FiArrowLeft size={16} />
        Mes classes
      </Link>

      <h1 className="mt-4 text-3xl font-semibold uppercase">{classeActuelle.nom}</h1>
      <p className="mt-2 text-grey">Gérez vos élèves et lancez l&apos;appel.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/dashboard/${classeId}/appel`} className="btn-primary">
          Faire l&apos;appel
        </Link>
        <Link href={`/dashboard/${classeId}/suivi`} className="btn-secondary">
          Voir le suivi
        </Link>
        <button onClick={ouvrirAjout} className="btn-secondary flex items-center gap-2">
          <FiPlus size={16} />
          Ajouter un élève
        </button>
        <button
            onClick={handleSupprimerClasse}
            aria-label="Supprimer la classe"
            className="btn-secondary flex items-center gap-2"
        >
            <FiTrash2 size={16} />
            Supprimer la classe
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-grey">
            <tr>
              <th className="px-5 py-3">Nom</th>
              <th className="px-5 py-3">Prénom</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classeActuelle.eleves.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-5 py-6 text-center text-grey">
                  Aucun élève pour le moment.
                </td>
              </tr>
            ) : (
              classeActuelle.eleves.map((eleve) => (
                <tr key={eleve.id} className="border-t border-cream">
                  <td className="px-5 py-3">{eleve.nom}</td>
                  <td className="px-5 py-3">{eleve.prenom}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-3 text-grey">
                      <Link href={`/dashboard/${classeId}/suivi/${eleve.id}`} aria-label="Historique">
                        <FiClock size={16} />
                      </Link>
                      <button onClick={() => ouvrirEdition(eleve)} aria-label="Modifier">
                        <FiEdit2 size={16} />
                      </button>
                      <button onClick={() => handleSupprimer(eleve.id, eleve)} aria-label="Supprimer">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modaleElleve !== null}
        onClose={() => setModaleEleve(null)}
        title={modaleElleve === 'nouveau' ? 'Ajouter un élève' : "Modifier l'élève"}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <IconInput
            icon={null}
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <IconInput
            icon={null}
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary mt-2">
            {modaleElleve === 'nouveau' ? 'Ajouter' : 'Enregistrer'}
          </button>
        </form>
      </Modal>
    </div>
  )
}