// components/Faq.tsx
'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { FiPlus, FiX } from 'react-icons/fi'

const questions = [
  {
    question: 'Présence est-elle payante ?',
    reponse:
      "Non, Présence est entièrement gratuit dans cette version. C'est un projet pensé pour rester simple et accessible aux enseignants, sans coût d'hébergement ni d'abonnement.",
  },
  {
    question: 'Mes données sont-elles en toute sécurité avec Présence ?',
    reponse:
      "Vos classes, élèves et présences sont enregistrés directement dans le navigateur de votre appareil (localStorage), pas sur un serveur distant. Cela évite tout risque de fuite en ligne, mais signifie aussi que ces données restent propres à cet appareil et ce navigateur.",
  },
  {
    question: 'Puis-je utiliser Présence sur plusieurs appareils ?',
    reponse:
      "Pas pour le moment. Les données étant stockées localement, elles ne se synchronisent pas automatiquement entre un téléphone, une tablette et un ordinateur.",
  },
  {
    question: 'Comment exporter mes registres registres ?',
    reponse:
      "Depuis l'écran Suivi d'une classe, choisissez une date de séance puis cliquez sur \"Exporter en PDF\" pour télécharger le registre complet, prêt à transmettre à l'administration.",
  },
  {
    question: 'Présence fonctionne-t-elle sans connexion internet ?',
    reponse:
      "Une fois la page chargée, la prise de présence fonctionne même avec une connexion faible ou instable, puisque les données sont gérées localement plutôt que via des appels serveur constants.",
  },
]

export default function Faq() {
  // Un seul élément ouvert à la fois, comme sur la maquette (null = tout fermé)
  const [ouvert, setOuvert] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-3xl flex flex-col items-center">

        {/* badge vert plein */}
        <motion.span
          className="badge-eyebrow mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          FAQ
        </motion.span>
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-wide text-emeraude"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Questions fréquentes
        </motion.p>

        <motion.h2
          className="mt-2 text-center text-3xl uppercase text-black md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Foire aux questions
        </motion.h2>

        <div className="mt-10 flex flex-col gap-3">
          {questions.map((item, index) => {
            const estOuvert = ouvert === index
            return (
              <motion.div
                key={item.question}
                className="overflow-hidden rounded-2xl bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <button
                  onClick={() => setOuvert(estOuvert ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  aria-expanded={estOuvert}
                >
                  <span className="font-fraunces font-semibold text-emeraude md:w-200">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emeraude-50 text-emeraude cursor-pointer">
                    {estOuvert ? <FiX size={16} /> : <FiPlus size={16} />}
                  </span>
                </button>

                {estOuvert && (
                  <div className="px-6 pb-5 text-sm text-grey">
                    {item.reponse}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}