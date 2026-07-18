import { InputHTMLAttributes } from 'react'

// Champ de formulaire générique avec icône, réutilisable partout dans l'app
// (Connexion, Créer un compte, Ajouter une classe...) plutôt que de dupliquer
// ce style à chaque nouveau formulaire.
type IconInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
}

export default function IconInput({ icon, ...props }: IconInputProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emeraude">
        {icon}
      </span>
      <input
        {...props}
        className="w-full rounded-btn border border-emeraude/40 bg-emeraude-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-emeraude"
      />
    </div>
  )
}