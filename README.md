
# PRÉSENCE - la clé du succès

Application web de gestion de présence destinée aux enseignants gabonais. PRÉSENCE permet de créer des classes, gérer des listes d'élèves, faire l'appel en quelques clics et suivre les statistiques de présence, avec export PDF à la clé.

 **Démo en ligne** : [presence-coral.vercel.app](https://presence-coral.vercel.app)

---

## Sommaire

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Captures d'écran](#-captures-décran)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [Choix techniques](#-choix-techniques)
- [Roadmap](#-roadmap)
- [Auteur](#-auteur)

---

## Aperçu

PRÉSENCE simplifie la gestion quotidienne de la présence en classe pour les enseignants : moins de papier, moins de temps perdu, plus de visibilité sur l'assiduité des élèves.

##  Fonctionnalités

-  **Authentification** — connexion sécurisée avec garde de session
- **Gestion des classes** — création, consultation et détail de chaque classe
-  **Gestion des élèves** — ajout, modification et suppression via un système modal
- **Faire l'appel** — interface rapide de prise de présence, avec verrouillage de session pour éviter les doublons
-  **Suivi par élève** — historique individuel de présence
-  **Suivi par séance** — vue d'ensemble par séance avec export PDF dynamique
-  **Interface soignée** — design vert émeraude / crème, animations fluides (Motion)

##  Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | Next.js (App Router) |
| Langage | TypeScript |
| Style | Tailwind CSS v4 |
| Animations | Motion (`motion/react`) |
| Export PDF | jsPDF |
| Persistance | localStorage (hook `useLocalStorage` custom) |
| Déploiement | Vercel |

##  Captures d'écran

<!-- Ajoute tes captures ici, par exemple : -->



## Installation

Clone le repo et installe les dépendances :

```bash
git clone https://github.com/wen360lab/presence.git
cd presence
pnpm install
```

Lance le serveur de développement :

```bash
pnpm dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## Utilisation

1. Crée un compte ou connecte-toi
2. Ajoute une nouvelle classe
3. Ajoute tes élèves à la classe
4. Fais l'appel en un clic
5. Consulte le suivi par élève ou par séance
6. Exporte les données de présence en PDF

##  Structure du projet

```
présence/
├── app/                  # Pages et routes (App Router)
├── components/           # Composants réutilisables
├── hooks/                # Hooks custom (ex: useLocalStorage)
├── lib/                  # Fonctions utilitaires
├── types/                # Types TypeScript (Account, Classe, Eleve, Presence)
└── public/               # Assets statiques
```

##  Choix techniques

- **localStorage plutôt qu'un backend** : décision volontaire  pour un MVP local-first, permettant de livrer une V1 fonctionnelle et testable sans dépendance serveur.
- **Pattern à trois états** pour les modals de gestion des élèves (ajout / édition / suppression), garantissant une UX cohérente.
- **Verrouillage de session** lors de l'appel, pour éviter les erreurs de double saisie.

##  Roadmap

- [ ] Backend avec base de données réelle (remplacement de localStorage)
- [ ] Rôle **administrateur** (gestion multi-enseignants, multi-établissements)
- [ ] Notifications aux parents
- [ ] Statistiques avancées (taux d'absentéisme, tendances par période)

##  Auteur

**MAKANAGA ETCHOU Wen Joanel** — Étudiant développeur web & web mobile, École 241 (Libreville, Gabon)
