import '@/style/globals.css'


// Importation des composants
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'





export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center' >
      <Header/>
      <Hero/>


    </section>
  );
}
