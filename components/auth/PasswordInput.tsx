// components/auth/PasswordInput.tsx
'use client'
import { useState } from 'react'
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

type PasswordInputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function PasswordInput({ value, onChange, placeholder = 'Mot de passe' }: PasswordInputProps) {
  // Contrôle si le mot de passe est visible en clair ou masqué par des points.
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emeraude">
        <FiLock size={18} />
      </span>

      <input
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-btn border border-emeraude/40 bg-emeraude-50 py-3 pl-11 pr-11 text-sm outline-none focus:border-emeraude"
      />

      {/* Bouton icône, positionné à droite du champ */}
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-emeraude"
        aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
      >
        {visible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
    </div>
  )
}