// components/Fonctionnalites.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'


export default function History() {
  return (
    <section id="apropos" className="px-6 py-20 bg-white w-full">
      <div className="mx-auto max-w-5xl flex  flex-col items-center">
         {/* badge vert plein */}
        <motion.span
          className="badge-eyebrow mb-6 font-semibold shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          À propos
        </motion.span>
        <motion.h2
          className="text-center text-3xl uppercase text-black md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          L&apos;histoire derrière Présence
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-lg text-center text-grey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Un projet né d&apos;un besoin simple, devenu une app complète.
        </motion.p>

        <motion.div className="w-full mt-12 flex flex-col md:flex-row gap-4 justify-evenly bg-menthe p-6 rounded-2xl shadow-xl border border-grey/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          {/* La description */}
          <div className="w-full md:w-1/2 flex  flex-col items-center justify-center">
            {/* Logo */}
            <motion.span
              className='p-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image 
                src="/LogoPresence (1).svg" 
                alt="Présence - La clé du succès" 
                width={100} 
                height={100} 
                className="object-contain"
                priority
              /> 
            </motion.span>
            <motion.p
              className="text-lg md:text-xl font-semibold text-justify font-fraunces text-grey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              &quot;Présence est né d&apos;un constat simple : <span className='text-black'> la gestion de l&apos;assiduité en classe repose encore trop souvent sur des feuilles de papier, faciles à perdre, à oublier ou à falsifier</span>.
              Ce projet a été pensé pour <span className='text-black'>simplifier ce geste quotidien des enseignants, pointer sa classe, sans complexité inutile, en gardant une trace fiable et exploitable à tout moment </span>.
              Développé comme projet de fin d&apos;études, Présence propose une première version volontairement simple, centrée sur l&apos;essentiel : <span className='text-black'>créer ses classes, gérer ses élèves, pointer les présences et exporter ses registres</span>.&quot;
            </motion.p>
          </div>

          {/* La photo de profil */}
          <motion.div
            className=" flex-col w-full md:w-1/3 flex items-center justify-center p-6 bg-emeraude rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Image 
              className='bg-menthe rounded-full'
              src="/Images/wen.png" 
              alt="Auteur et concepteur de Présence" 
              width={200}
              height={200} 
            />
            <p className='text-xl font-sora font-bold text-center pt-4 text-menthe'>MAKANAGA ETCHOU <br /> Wen Joanel <br /> <span className='text-sm font-inter text-white'>Créateur et concepteur de Présence</span></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}