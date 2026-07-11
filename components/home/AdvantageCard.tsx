// components/AdvantageCard.tsx
'use client'
import { motion } from 'motion/react'

type AdvantageCardProps = {
  number: number
  title: string
  description: string
  delay?: number
}

export default function AdvantageCard({ number, title, description, delay = 0 }: AdvantageCardProps) {
  return (
    <motion.div
      className="card-advantage flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="font-oswald text-2xl">
        {String(number).padStart(2, '0')} — {title}
      </span>
      <p className="mt-4 text-sm text-white/85">{description}</p>
    </motion.div>
  )
}