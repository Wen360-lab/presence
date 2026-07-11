// Import du style 
import '@/style/globals.css'


// Importation des composants
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Avantages from '@/components/home/Avantages'
import Testimonials from '@/components/home/Avis'
import History from '@/components/home/History'



// La page Principale
export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center' >
      <Header/>
      <Hero/>
      <hr className='w-full bg-emeraude p-1'/>
      <Features/>
      <Avantages/>
      <Testimonials/>
      <History/>


    </section>
  );
}
