// components/Fonctionnalites.tsx
'use client'
import { motion } from 'motion/react'
import Image from 'next/image'


export default function History() {
  return (
    <section className="px-6 py-20 bg-white w-full">
      <div className="mx-auto max-w-5xl">
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

        <motion.div className="w-full mt-12 flex flex-col md:flex-row gap-4 bg-cream p-6 rounded-2xl shadow-xl border border-grey/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >

          {/* La description */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <motion.p
              className="text-lg md:text-xl font-medium text-justify font-oswald text-grey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Présence est né d&apos;un constat simple : la gestion de l&apos;assiduité en classe repose encore trop souvent sur des feuilles de papier, faciles à perdre, à oublier ou à falsifier.
              Ce projet a été pensé pour simplifier ce geste quotidien des enseignants, pointer sa classe, sans complexité inutile, en gardant une trace fiable et exploitable à tout moment.
              Développé comme projet de fin d&apos;études, Présence propose une première version volontairement simple, centrée sur l&apos;essentiel : créer ses classes, gérer ses élèves, pointer les présences et exporter ses registres.
            </motion.p>
          </div>

          {/* L'illustration */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Image src="/Programmer.svg" alt="Illustration d'un programmeur" width={300} height={300} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}