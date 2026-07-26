// components/AdvantageCard.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

type AdvantageCardProps = {
  illustration: string
  title: string
  soustitle: string
  description: string
  delay?: number
}

export default function AdvantageCard({ illustration, title, soustitle, description, delay = 0 }: AdvantageCardProps) {
  return (
    <motion.div
      className="card-advantage flex flex-col items-center shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    > 
      <div className='mb-4 flex w-full items-center justify-evenly'>
        <span className="font-sora font-extrabold text-3xl text-emeraude-50">
          {title}
        </span>
        <Image src={illustration} alt="" width={130} height={130} />
      </div>
      <div className='flex flex-col bg-white mt-4 rounded-btn p-6'>
        <h3 className='text-2xl text-emeraude'>{soustitle}</h3>
        <p className="mt-4 text-sm text-grey">{description}</p>
      </div>
    </motion.div>
  )
}