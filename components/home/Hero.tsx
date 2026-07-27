// components/Hero.tsx
'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { FaSchool, FaGraduationCap, FaUniversity } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="accueil" className="relative flex flex-col px-6 items-center w-full py-16 md:py-30 bg-[url(/Images/salleDeClasse.jpg)] bg-cover bg-center bg-no-repeat">
      {/* <section id="accueil" className="relative px-6 pb-24 pt-16 md:pt-30 bg-[url(/Images/salleDeClasse.jpg)] bg-cover bg-center bg-no-repeat"></section> */}
      {/* Voile pour garder le texte lisible par-dessus la photo */}
      <div className="absolute inset-0 bg-emerald-950/70" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:justify-between">

        {/* Contenu central */}
        <div className="flex max-w-2xl flex-col items-center text-center text-shadow-2xs">

          <motion.span
            className="badge-eyebrow mb-6 font-semibold shadow-xl text-shadow-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Digitalisez vos registres d&apos;appel
          </motion.span>

          <motion.h1
            className="text-4xl text-cream leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Pointer, suivre et <span className='italic text-[#3F8E46]'>centraliser</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-lg font-bold text-white md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Pilotez l&apos;assiduité de vos apprenants et gérez tous vos registres d&apos;appel depuis une seule application.
          </motion.p>

          <motion.p
            className="mt-4 font-fraunces font-semibold text-cream"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
           Moins de temps pour l&apos;appel. Plus de temps pour enseigner.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 items-center justify-center md:gap-10 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/connexion" className="btn-secondary shadow-2xl text-shadow-none">Commencer l&apos;appel</Link>
            <Link href="/createAcount" className="btn-primary px-8 shadow-2xl text-shadow-none">Créer un compte</Link>
          </motion.div>
        </div>
      </div>
      {/* Badge vert avec les entités principales dont l'application est destinée */}
      <motion.div
        className="absolute -bottom-19  left-1/2 z-20 w-[92%] max-w-3xl -translate-x-1/2 rounded-btn bg-emeraude/95 px-4 py-4 shadow-xl backdrop-blur-sm sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex flex-wrap items-center justify-evenly  divide-white/25 text-white font-sora">
          <div className="flex items-center justify-center gap-2 px-4 py-1 sm:px-6">
            <FaSchool size={20} />
            <span className="text-sm font-medium sm:text-base">Primaire</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 sm:px-6">
            <FaGraduationCap size={20} />
            <span className="text-sm font-medium sm:text-base">Secondaire</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 sm:px-6">
            <FaUniversity size={20} />
            <span className="text-sm font-medium sm:text-base">Université</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}