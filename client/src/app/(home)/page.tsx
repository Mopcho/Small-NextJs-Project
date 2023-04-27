import { StoryCard } from '@/components/StoryCard/StoryCard';
import HOMEPAGE_IMAGE from '../../public/images/homepage-image.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero-layout mt-10">
      <main className='flex flex-col items-center gap-6'>
        <img src={HOMEPAGE_IMAGE.src} alt='hero' className="aspect-square rounded-xl w-3/4"></img>
        <h2 className='text-custom-green text-4xl break-keep text-center'>A blog worth browsing!</h2>
        <Link href='/login' className='text-white text-2xl bg-blue-800 py-3 px-5 rounded-full font-bold hover:scale-110'>Login Now</Link>
      </main>
      <aside className='flex flex-col gap-5'>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </aside>
    </section>
  )
}
