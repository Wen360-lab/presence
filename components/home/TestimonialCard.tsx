// components/TestimonialCard.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

type TestimonialCardProps = {
  photo: string
  quote: string
  name: string
  role: string
  delay?: number
}

export default function TestimonialCard({ photo, quote, name, role, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="flex md:w-150 flex-col items-center gap-8 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Photo */}
      <div className="shrink-0 overflow-hidden rounded-full border-2 border-emeraude">
        <Image src={photo} alt={name} width={100} height={50} className="h-auto w-full object-cover" />
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col md:items-start items-center text-left">
        {/* Nom et profession */}
        <p className="font-oswald md:mt-6 text-xl font-semibold text-black">{name}</p>
        <p className="text-sm text-grey">{role}</p>
        {/* Nbre d'étoiles */}
        <div className="mt-2 flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={18} />
          ))}
        </div>

        {/* Avis personnel */}
        <p className="text-lg text-justify md:text-left italic text-black mt-3">&laquo; {quote} &raquo;</p>
      </div>
    </motion.div>
  )
}