// components/ui/Modal.tsx
'use client'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

// Modale générique : overlay sombre + carte centrée. Réutilisable partout
// (ajout d'élève ici, mais aussi ailleurs si besoin plus tard).
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-oswald text-lg font-semibold text-black">{title}</h2>
          <button onClick={onClose} aria-label="Fermer" className="text-grey">
            <FiX size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}