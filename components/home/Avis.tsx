// components/Avis.tsx
'use client'
import { motion } from 'motion/react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    photo: '/Images/Sophie.jpg',
    quote: 'Je gagne un temps fou le matin, plus besoin de sortir mon cahier d\u2019appel.',
    name: 'Sophie M.',
    role: 'Professeure de français, collège',
  },
  {
    photo: '/Images/Marc.jpg',
    quote: 'Enfin un outil simple, pas besoin de formation pour s\u2019y mettre.',
    name: 'Marc D.',
    role: 'Professeur de mathématiques, lycée',
  },
  {
    photo: '/Images/Awa.jpg',
    quote: 'Le PDF exporté est parfait à transmettre à l\u2019administration.',
    name: 'Awa K.',
    role: 'Professeure principale',
  },
  {
    photo: '/Images/Karim.jpg',
    quote: 'Simple à utiliser même avec les plus jeunes, ça ne perturbe pas le rythme de la classe.',
    name: 'Karim B.',
    role: 'Instituteur, primaire',
  },
]

export default function Avis() {
  return (
    <section id="avis" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <motion.h2
          className="text-center text-3xl uppercase text-black md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pensé pour les enseignants
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-center text-grey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Conçu à partir des besoins du terrain.
        </motion.p>

        <div className="mt-12 flex flex-col gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={t.name}
              photo={t.photo}
              quote={t.quote}
              name={t.name}
              role={t.role}
              delay={0.1 * index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}