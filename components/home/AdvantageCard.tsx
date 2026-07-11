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
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <span className="font-sora font-extrabold text-2xl">
        {String(number).padStart(2, '0')} — {title}
      </span>
      <div className='flex flex-col bg-white mt-4 rounded-btn p-4'>
        <h3 className='text-2xl text-black'>Pointer en quelques secondes</h3>
       <p className="mt-4 text-sm text-grey">{description}</p>

      </div>
    </motion.div>
  )
}