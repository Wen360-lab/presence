// app/nouvelle-classe/page.tsx
'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiHome, FiBook, FiTrendingUp } from 'react-icons/fi'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import IconInput from '@/components/ui/IconInput'
import type { Classe } from '@/types/dashboard'

export default function NouvelleClassePage() {
  const router = useRouter()
  const [classes, setClasses] = useLocalStorage<Classe[]>('presence:classes', [])

  const [nom, setNom] = useState('')
  const [matiere, setMatiere] = useState('')
  const [niveau, setNiveau] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const nouvelleClasse: Classe = {
      id: crypto.randomUUID(),
      nom,
      matiere,
      niveau,
      eleves: [], // une classe démarre toujours sans élève, ajoutés ensuite depuis le Détail
    }

    setClasses([...classes, nouvelleClasse])
    router.push('/dashboard')
  }

  return (
    <section className="flex items-center justify-center bg-emeraude rounded-2xl px-6 py-12">
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
          <Image src="/Classroom-pana.svg" alt="" width={320} height={320} priority />
        </motion.div>

        <motion.div
          className="w-full rounded-2xl bg-white p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-center text-2xl font-semibold text-emeraude">
            Créez une nouvelle classe
          </h1>
          <p className="mt-2 text-center text-sm text-grey">
            Ajoutez autant de classe que vous souhaitez
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <IconInput
              icon={<FiHome size={18} />}
              type="text"
              placeholder="Nom de la salle"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <IconInput
              icon={<FiBook size={18} />}
              type="text"
              placeholder="Matière"
              value={matiere}
              onChange={(e) => setMatiere(e.target.value)}
              required
            />
            <IconInput
              icon={<FiTrendingUp size={18} />}
              type="text"
              placeholder="Niveau"
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              required
            />

            <button type="submit" className="btn-primary mt-4">
              Créer la classe
            </button>

            <Link
              href="/dashboard"
              className="mt-3 text-center text-sm text-grey hover:text-emeraude"
            >
              Annuler la création
            </Link>
          </form>
        </motion.div>
      </div>
    </section>
  )
}