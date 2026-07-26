'use client'
import { motion } from 'motion/react'
import Link from 'next/link'


export default function Cta() {
    return (

        <section className="flex flex-col items-center gap-8 md:gap-20 px-6 py-20 bg-emeraude w-full">
            {/* Titre et sous-titre */}
            <div className="mx-auto max-w-5xl">
                <motion.h2
                className="text-center text-3xl uppercase text-white md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Digitalisez vos registres d&apos;appel <br /> dès aujourd&apos;hui
                </motion.h2>

                <motion.p
                className="mx-auto mt-4 max-w-lg text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Rejoignez les équipes qui ont déjà simplifié leur gestion administrative avec Présence.
                </motion.p>
            </div>

            {/* Le bouton de création de compte et le lien de connexion */}
            <motion.div className='flex flex-col items-center justify-center gap-6'     
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Link href='/createAcount' className="btn-secondary hover:bg-emeraude duration-300 shadow-xl">Commencer gratuitement</Link>
                <Link href='/connexion'><p className='text-white font-sora text-sm hover:text-menthe duration-300'>Déjà utilisateur ? Se connecter</p></Link>
            </motion.div>
        </section>
    )
}