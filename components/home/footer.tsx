// components/Footer.tsx
'use client'
import Image from 'next/image'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t-2 border-emeraude bg-cream px-6 py-12 mt-8 w-full">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Logo et newsletter */}
          <div className="flex flex-col items-start">
            <Image src="/LogoPresence (1).svg" alt="Présence" width={120} height={60} className="object-contain" />
            <p className="mt-1 text-sm text-grey">La clé du succès</p>

            <p className="mt-6 font-oswald text-sm font-semibold text-black">Souscrivez maintenant</p>
            <form className="mt-3 flex w-full flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Entrez votre adresse mail"
                className="w-full rounded-btn border border-grey/30 bg-white px-4 py-2 text-sm text-black outline-none focus:border-emeraude"
              />
              <button type="submit" className="btn-primary w-full">
                Souscrire
              </button>
            </form>
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

          {/* Liens utiles */}
          <div>
            <p className="font-oswald text-sm font-semibold text-black">Liens utiles</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li><a href="#" className="hover:text-emeraude">Services</a></li>
              <li><a href="#" className="hover:text-emeraude">Supports</a></li>
              <li><a href="#" className="hover:text-emeraude">Termes et conditions</a></li>
              <li><a href="#" className="hover:text-emeraude">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-oswald text-sm font-semibold text-black">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li>+241 1145689</li>
              <li>Adressemailficti@gmail.com</li>
            </ul>
            <div className="mt-4 flex gap-4 text-emeraude">
              <a href="#" aria-label="Facebook" className="hover:text-emeraude/70"><FaFacebookF size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-emeraude/70"><FaGithub size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-emeraude/70"><FaLinkedinIn size={18} /></a>
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