// components/Footer.tsx
'use client'
import Image from 'next/image'
import { FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="border-t-4 w-full border-emeraude bg-menthe px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          {/* Logo  */}
          <div className="flex flex-col items-start">
            <Image src="/LogoPresence (1).svg" alt="Présence" width={120} height={60} className="object-contain" />
            <p className="mt-1 text-sm text-grey">La plateforme qui simplifie le pointage, <br />le suivi et la centralisation des présences <br /> pour tous les enseigants.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-fraunces text-sm font-bold text-black">Navigation</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li><a href="#accueil" className="hover:text-emeraude">Accueil</a></li>
              <li><a href="#fonctionnalites" className="hover:text-emeraude">Fonctionnalités</a></li>
              <li><a href="#avantages" className="hover:text-emeraude">Avantages</a></li>
              <li><a href="#apropos" className="hover:text-emeraude">À propos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-fraunces text-sm font-bold text-black">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-grey">
              <li>
                <span className='flex gap-1'><FaPhoneAlt size={15} className='text-emeraude'/> +241 66792795</span>
              </li>
              <li>
                <span className='flex gap-1'><FaPhoneAlt size={15} className='text-emeraude'/> +241 77478646</span>
              </li>
              <li>
                <span className='flex gap-1 items-center'><IoMdMail size={16} className='text-emeraude'/>wenetchou330@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-4 text-black">
              
              <a href="https://github.com/Wen360-lab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-emeraude/70"
              >
                <span className='flex gap-1'>
                  <FaGithub size={22} />
                  <p>Wen360-Lab</p>
                </span>
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