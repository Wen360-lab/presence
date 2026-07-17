// Un élève appartient à une seule classe (via classeId dans Presence, pas ici).
export type Eleve = {
    id: string
    nom: string
    prenom: string
}

// Une classe créée par l'enseignant.
export type Classe = {
    id: string
    nom: string       // ex: "Salle 09"
    niveau: string    // ex: "Sixième"
    matiere: string   // ex: "Mathématiques"
    eleves: Eleve[]
}