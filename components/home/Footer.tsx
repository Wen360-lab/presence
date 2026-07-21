// components/Footer.tsx
'use client'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t-4 w-full md:mt-20 border-emeraude bg-cream px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo +  */}
          <div className="flex flex-col items-start">
            <Image src="/logoPresence (1).svg" alt="Présence" width={120} height={60} className="object-contain" />
            <p className="mt-1 text-sm text-grey">La clé du succès</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-oswald text-sm font-semibold text-black">Navigation</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li><a href="#accueil" className="hover:text-emeraude">Accueil</a></li>
              <li><a href="#fonctionnalites" className="hover:text-emeraude">Fonctionnalités</a></li>
              <li><a href="#avantages" className="hover:text-emeraude">Avantages</a></li>
              <li><a href="#apropos" className="hover:text-emeraude">À propos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-oswald text-sm font-semibold text-black">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li>+241 66792795</li>
              <li>+241 77478646</li>
              <li>wenetchou330@gmail.com</li>
            </ul>
            <div className="mt-4 flex gap-4 text-emeraude">
              
              <a href="https://github.com/Wen360-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-emeraude/70"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

        </div>

        <hr className="mt-10 border-grey/20" />

        <p className="mt-6 text-center text-xs text-grey">
          © 2026 Présence. Tous droits réservés.
        </p>

      </div>
    </footer>
  )
}