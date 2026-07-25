// components/Avantages.tsx
'use client'
import { motion } from 'motion/react'
import AdvantageCard from './AdvantageCard'

const advantages = [
  {
    illustration: "Activity.svg",
    title: 'Rapidité',
    soustitle: "L'appel bouclé en un rien de temps",
    description: "Pointer en quelques secondes, une classe après l'autre, sans jamais perdre le fil.",
  },
  {
    illustration: "/Fingerprint.svg",
    title: 'Sécurité',
    soustitle: "Sans fraudes ni falsifications",
    description: "Des registres infalsifiables, une seule source fiable pour chaque séance.",
  },
  {
    illustration: "/OnlineDocument.svg",
    title: 'Efficacité',
    soustitle: 'Zero paperasse, zero ressaisie',
    description: "Une seule interface pour tout centraliser, sans ressaisie ni papier. Simple et efficace.",
  },
  {
    illustration: "/DigitalPersonalFiles.svg",
    title: 'Clarté',
    soustitle: 'Des interfaces simples et claires',
    description: "Des tableaux de bord qui vous offrent une vision claire de l'assiduité de vos apprenants.",
  },
]

export default function Avantages() {
  return (
    <section id="avantages" className="px-6 py-20">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">

        {/* badge vert plein */}
        <motion.span
          className="badge-eyebrow mb-6 font-semibold shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Avantages
        </motion.span>

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
          Fini les registres papiers et les tableurs éparpillés. Tout est centralisé, sécurisé et accessible en temps réel.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              illustration={advantage.illustration}
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