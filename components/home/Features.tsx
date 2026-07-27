// components/Fonctionnalites.tsx
'use client'
import { motion } from 'motion/react'
import FeatureCard from './FeatureCard'

const features = [
  {
    illustration: '/SocialSchool.svg',
    title: 'Organisez vos classes',
    description: "Créez autant de classes que nécessaire, chacune avec sa propre liste d'élèves.",
  },
  {
    illustration: '/teamchecklist.svg',
    title: 'Constituez vos listes',
    description: "Ajoutez vos élèves une seule fois, réutilisez la liste à chaque séance sans ressaisie.",
  },
  {
    illustration: '/Typing.svg',
    title: 'Pointez en un geste',
    description: "Présent, absent ou en retard : un clic par élève suffit pour clôturer l'appel.",
  },
  {
    illustration: '/Download.svg',
    title: 'Générez votre registre',
    description: "Téléchargez le registre de présence de la séance, prêt à archiver ou transmettre à l'administration.",
  },
]

export default function Fonctionnalites() {
  return (
    <section id="fonctionnalites" className="px-6 pt-50 pb-25 bg-white w-full">
      <div className="mx-auto max-w-5xl flex flex-col items-center">
         {/* badge vert plein */}
        <motion.span
          className="badge-eyebrow mb-6 font-semibold shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Fonctionnalités
        </motion.span>
        
        <motion.h2
          className="text-center text-3xl uppercase text-black md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comment fonctionne Présence ?
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-center text-emeraude font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          De la création de vos classes à l&apos;export de vos registres.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              illustration={feature.illustration}
              title={feature.title}
              description={feature.description}
              number={index + 1}
              delay={0.1 * index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}