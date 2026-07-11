'use client'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 bg-emeraude backdrop-blur-md border-b border-white w-full shadow-xl">

      {/* Logo */}
      <Image 
          src="/logoPresence.svg" 
          alt="Présence - La clé du succès" 
          width={90} 
          height={90} 
          className="object-contain"
          priority
        /> 

      {/* Navigation - cachée sur mobile, visible à partir de lg */}
      <nav className="hidden lg:block">
        <ul className="flex gap-10 text-base font-inter text-white">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#fonctionnalites">Fonctionnalités</a></li>
          <li><a href="#avantages">Avantages</a></li>
          <li><a href="#apropos">À propos</a></li>
        </ul>
      </nav>

      {/* CTA - caché sur mobile */}
      <Link href=""
        className="hidden lg:inline-block rounded-xl px-5 py-3 text-sm font-semibold font-sora text-white border-2 border-white  shadow-xl bg-emeraude hover:bg-white hover:text-emeraude duration-500"
      >
        Se connecter
      </Link>

      {/* Bouton burger - visible uniquement sur mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white"
        aria-label="Menu"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <nav className="absolute flex flex-col items-center justify-center top-full left-0 w-full bg-emeraude-50 shadow lg:hidden">
          <ul className="flex flex-col gap-4 p-6 text-sm font-medium font-inter text-emeraude">
            <li className=""><a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a></li>
            <li className=""><a href="#fonctionnalite" onClick={() => setIsOpen(false)}>Fonctionnalités</a></li>
            <li className=""><a href="#avantages" onClick={() => setIsOpen(false)}>Avantages</a></li>
            <li className=""><a href="#apropos" onClick={() => setIsOpen(false)}>À propos</a></li>
            <li>

              
                <Link href=""
                    className="inline-block rounded-btn px-5 py-2 text-sm font-semibold text-emeraude bg-white shadow border-2 border-emeraude"
                >
                    Se connecter
                </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}