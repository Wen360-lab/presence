// components/Avantages.tsx
'use client'
import { motion } from 'motion/react'
import AdvantageCard from './AdvantageCard'

const advantages = [
  {
    title: 'Rapidité',
    soustitle: 'Pointer en quelques secondes',
    description: 'Toute une classe enregistrée en un instant, même entre deux cours, sans perdre de temps.',
  },
  {
    title: 'Sécurité',
    soustitle: 'Des registres infalsifiables',
    description: "Une fois validée, une présence ne peut plus être modifiée. Fini les registres trafiqués ou contestés.",
  },
  {
    title: 'Efficacité',
    soustitle: 'Zero paperasse, zero ressaisie',
    description: 'Une seule interface pour tout centraliser, sans ressaisie ni papier. Simplicité et efficacité.',
  },
]

export default function Avantages() {
  return (
    <section id="avantages" className="px-6 pt-20">
      <div className="mx-auto max-w-5xl">

        <motion.h2
          className="text-center text-3xl uppercase text-black md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ce qui change avec Présence
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-center text-grey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Moins de paperasse, plus de temps pour enseigner.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              number={index + 1}
              title={advantage.title}
              soustitle={advantage.soustitle}
              description={advantage.description}
              delay={0.1 * index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}