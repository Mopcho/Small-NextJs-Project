import { BlogPost } from '../BlogPost/BlogPost';

export const BLogPage = (): JSX.Element => {
  return (
    <>
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
      </div>
      <button className="browse-loader">Load More</button>
    </>
  );
};
