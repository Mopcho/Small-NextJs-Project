import { StoryCard } from '@/components/StoryCard/StoryCard';
import HOMEPAGE_IMAGE from '../../public/images/homepage-image.jpg';
import Link from 'next/link';
import { ROUTE_LOGIN } from '@/constants/links';

export default async function Home() {
  return (
    <section className="hero-layout custom-container bg-custom-black">
      <main className="flex flex-col items-center gap-6">
        <img
          src={HOMEPAGE_IMAGE.src}
          alt="hero"
          className="aspect-square rounded-xl h-[500px]"
        ></img>
        <h2 className="text-custom-cyan text-4xl break-keep text-center">
          A blog worth browsing!
        </h2>
        <Link
          href={`/${ROUTE_LOGIN}`}
          className="text-2xl bg-custom-red text-white py-5 px-16 font-medium hover:scale-110 uppercase tracking-[.15em]"
        >
          Login Now
        </Link>
      </main>
      <aside className="flex flex-col gap-5">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </aside>
    </section>
  );
}
