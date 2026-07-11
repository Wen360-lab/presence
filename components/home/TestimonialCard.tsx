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
      className="flex flex-col-reverse items-center gap-8 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Photo */}
      <div className="shrink-0 overflow-hidden rounded-2xl">
        <Image src={photo} alt={name} width={150} height={100} className="h-auto w-full object-cover" />
      </div>

      {/* Contenu */}
      <div className="flex flex-col items-start text-left">
        <p className="text-lg italic text-black">&laquo; {quote} &raquo;</p>

        <div className="mt-4 flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={18} />
          ))}
        </div>

        <p className="font-oswald mt-6 text-xl font-semibold text-black">{name}</p>
        <p className="text-sm text-grey">{role}</p>
      </div>
    </motion.div>
  )
}