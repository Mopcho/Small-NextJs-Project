import { StoryCard } from '@/components/StoryCard/StoryCard';
import HOMEPAGE_IMAGE from '../../public/images/homepage-image.jpg';

export default function Home() {
  return (
    <section className="hero-layout mt-10">
      <main>
        <div>
          <img src={HOMEPAGE_IMAGE.src} alt='hero' className="aspect-square rounded-xl"></img>
        </div>
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
