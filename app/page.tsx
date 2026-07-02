import '@/style/globals.css'
import Image from 'next/image';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center' >
      <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
        <Image 
          src="/logoRemoveBg.png" // Assure-toi que ton image HD est bien nommée ainsi dans /public
          alt="Présence - La clé du succès" 
          width={300} 
          height={300} 
          className="object-contain"
          priority
        />
      </div>

    <h1 className='text-[#3F5D4D] text-xl '>Soyez la bienvenue sur Présence</h1>
    </section>
  );
}
