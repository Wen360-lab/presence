// app/(auth)/connexion/page.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiMail } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import AuthInput from '@/components/auth/AuthInput'
import PasswordInput from '@/components/auth/PasswordInput'
import type { Account } from '@/types/auth'

export default function ConnexionPage() {
  const router = useRouter()

  // Ici on lit le compte existant pour vérifier les identifiants saisis.
  const [account] = useLocalStorage<Account | null>('presence:account', null)

  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [erreur, setErreur] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Connexion simulée : on compare simplement aux valeurs stockées.
    // Pas de hash, pas de vraie sécurité : c'est un verrou d'usage, pas un rempart réel.
    if (account && email === account.email && motDePasse === account.motDePasse) {
      // Flag de session : lu par le dashboard pour savoir si l'enseignant est "connecté".
      window.localStorage.setItem('presence:isLoggedIn', 'true')
      router.push('/dashboard')
    } else {
      setErreur('Email ou mot de passe incorrect.')
    }
  }

  return (
    <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">

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
        <Image src="/Login.svg" alt="illustration Login" width={320} height={320} priority />
      </motion.div>

      <motion.div
        className="w-full rounded-2xl bg-white p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-center text-2xl font-semibold text-emeraude">
          Connexion
        </h1>
        <p className="mt-2 text-center text-sm text-grey">
          Commencez à gérer l&apos;assiduité de vos apprenants.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
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

          {/* Message d'erreur affiché seulement si une tentative a échoué */}
          {erreur && <p className="text-center text-xs text-red-600">{erreur}</p>}

          <button type="submit" className="btn-primary mt-4">
            Se connecter
          </button>

          {/* Dans le cas où l'enseigant oublie son mot de passe, il crée un autre compte */}
          <p className="mt-3 text-center text-xs text-grey">
            <Link href="/createAcount" className="text-emeraude">
              Mot de passe oublié ?
            </Link>
          </p>
        </form>

        <p className="mt-4 text-center text-xs text-grey">
          Pas de compte ?{' '}
          <Link href="/createAcount" className="font-semibold text-emeraude">
            S&apos;inscrire
          </Link>
        </p>
      </motion.div>
    </div>
  )
}