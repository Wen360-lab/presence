// components/FeatureCard.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

type FeatureCardProps = {
  illustration: string
  title: string
  description: string
  number: number
  delay?: number
}

export default function FeatureCard({ illustration, title, description, number, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="flex flex-col items-start rounded-2xl border border-emeraude bg-menthe p-6 shadow-xl shadow-menthe"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <Image src={illustration} alt="carte présentant les fonctionnalités de Présence : Organiser les classes, contituer les listes, pointer, générer un fichier complet" width={140} height={140} />
        <span className="font-oswald text-8xl text-emeraude">
          {String(number).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-oswald text-2xl font-bold text-emeraude">{title}</h3>
      <p className="mt-2 text-sm text-grey">{description}</p>
    </motion.div>
  )
}