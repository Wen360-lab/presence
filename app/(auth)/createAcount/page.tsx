// app/(auth)/creer-compte/page.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiUser, FiMail } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import AuthInput from '@/components/auth/AuthInput'
import PasswordInput from '@/components/auth/PasswordInput'
import type { Account } from '@/types/auth'

export default function CreerComptePage() {
  const router = useRouter()

  // On ne se sert jamais de la valeur lue ici (le compte n'existe pas encore) :
  // seul le setter `setAccount` nous intéresse, d'où le `[, setAccount]`.
  const [, setAccount] = useLocalStorage<Account | null>('presence:account', null)

  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault() // empêche le rechargement natif du formulaire
    setAccount({ nom, email, motDePasse })
    router.push('/connexion') // l'enseignant doit se connecter après inscription
  }

  return (
    <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">

      {/* Illustration, cachée sur mobile pour laisser toute la place au formulaire */}
      <motion.div
        className="hidden md:flex md:flex-col md:items-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Logo */}
        <Image 
          src="/logoPresence.svg" 
          alt="Présence - La clé du succès" 
          width={150} 
          height={150} 
          className="object-contain"
          priority
        /> 
        <Image src="/Signup.svg" alt="illustration Signup" width={320} height={320} priority />
      </motion.div>

      {/* Carte du formulaire */}
      <motion.div
        className="w-full rounded-2xl bg-white p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-center text-2xl font-semibold text-emeraude">
          Inscrivez-vous gratuitement
        </h1>
        <p className="mt-2 text-center text-sm text-grey">
          Prêt à gérer l&apos;assiduité de vos apprenants ?
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <AuthInput
            icon={<FiUser size={18} />}
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <AuthInput
            icon={<FiMail size={18} />}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
          />

          <button type="submit" className="btn-primary mt-4">
            Créer un compte
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-grey">
          Déjà un compte ?{' '}
          <Link href="/connexion" className="font-semibold text-emeraude">
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  )
}