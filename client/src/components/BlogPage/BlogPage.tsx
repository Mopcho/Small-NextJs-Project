'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '../BlogPost/BlogPost';
import axios from 'axios';
import { IBlogPost } from '@/lib/types';
import { format } from 'date-fns';
import classNames from 'classnames';

export const BLogPage = (): JSX.Element => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 9,
  });

  const [posts, setPosts] = useState<IBlogPost[]>([]);

  /**
   * Get initial posts
   */
  useEffect(() => {
    try {
      axios
        .get(
          `/api/blogs?pageSize=${pagination.pageSize}&page=${pagination.page}`
        )
        .then((res) => {
          setPosts(res.data.blogs);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleLoadMore = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    try {
      const response = await axios.get(
        `/api/blogs?pageSize=${pagination.pageSize}&page=${pagination.page + 1}`
      );

      const blogs: IBlogPost[] = response.data.blogs;

      setPosts([...posts, ...blogs]);

      setPagination({ ...pagination, page: pagination.page + 1 });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="browse-content">
        {posts.map((post) => (
          <BlogPost
            title={post.title}
            username={post.user.name}
            key={post.id}
            createtAt={format(
              new Date(post.createdAt),
              // eslint-disable-next-line quotes
              "'Posted at' MMMM yyyy"
            )}
          ></BlogPost>
        ))}
      </div>
      <button className="browse-loader" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};
