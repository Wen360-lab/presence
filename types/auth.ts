// types/auth.ts

// Représente le compte enseignant stocké en localStorage.
// Un seul compte pour ce MVP : pas de multi-utilisateurs.
export type Account = {
  civilite: 'M.' | 'Mme'
  nom: string
  email: string
  motDePasse: string
}