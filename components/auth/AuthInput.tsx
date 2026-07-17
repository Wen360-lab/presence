import { InputHTMLAttributes } from "react"

// Champ de formulaire réutilisé sur Connexion et Créer un compte.
// `icon` reçoit un composant d'icône (react-icons), déjà stylé et positionné.
type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode
}

export default function AuthInput({ icon, ...props }: AuthInputProps) {
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