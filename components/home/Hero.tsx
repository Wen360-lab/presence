// components/Hero.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="accueil" className="px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:justify-between">

        {/* Illustration gauche */}
        <motion.div
          className="hidden shrink-0 lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image src="/checklist-cuate.svg" alt="" width={270} height={350} priority />
        </motion.div>

        {/* Contenu central */}
        <div className="flex max-w-2xl flex-col items-center text-center">

          <motion.span
            className="badge-eyebrow mb-6 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conçu pour les enseignants du secondaire
          </motion.span>

          <motion.h1
            className="text-4xl uppercase text-black leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Pointer, suivre et centraliser
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-grey md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Une application simple pour des registres d&apos;appel fiables, cours après cours.
          </motion.p>

          <motion.p
            className="mt-4 font-sora font-semibold text-emeraude"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            5 à 10 minutes perdues à l&apos;appel. Présence règle ça en quelques secondes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 items-center justify-center md:gap-10 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="btn-primary shadow-xl">Commencer l&apos;appel</button>
            <button className="btn-secondary shadow-xl">Créer un compte</button>
          </motion.div>

        </div>

        {/* Illustration droite */}
        <motion.div
          className="hidden shrink-0 lg:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image src="/management-amico.svg" alt="" width={270} height={350} />
        </motion.div>

      </div>
    </section>
  )
}