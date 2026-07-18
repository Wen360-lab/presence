// types/dashboard.ts
export type Eleve = {
  id: string
  nom: string
  prenom: string
}

export type Classe = {
  id: string
  nom: string
  niveau: string
  matiere: string
  eleves: Eleve[]
}

// Une ligne de présence : un élève, une date, un statut.
// Toutes les présences de toutes les classes vivent dans un seul tableau,
// filtré selon le besoin (par classe+date pour le registre, par élève pour l'historique).
export type Statut = 'Présent' | 'Absent' | 'Retard'

export type Presence = {
  id: string
  classeId: string
  eleveId: string
  date: string // format "2026-07-17"
  statut: Statut
}