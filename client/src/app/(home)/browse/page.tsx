import { BLogPage } from '@/components/BlogPage/BlogPage';

export default function Browse() {
  return (
    <section className="browse-layout custom-container bg-custom-black">
      <div className="browse-menu">
        <li>Coding</li>
        <li>Cooking</li>
        <li>Anime</li>
      </div>
      <BLogPage></BLogPage>
    </section>
  );
}
