import { BlogPost } from "@/components/BlogPost/BlogPost";

export default function Browse() {
    return (
      <section className="browse-layout custom-container bg-custom-black">
        <div className="browse-menu">
            <li className="browse-selected-category">Coding</li>
            <li>Cooking</li>
            <li>Anime</li>
        </div>
        <div className="browse-content">
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
        </div>
      </section>
    )
  }