'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '../BlogPost/BlogPost';
import axios from 'axios';
import { IBlogPost } from '@/lib/types';
import { format } from 'date-fns';

export const BLogPage = (): JSX.Element => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 3,
    isLastPage: false,
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
          setPagination({ ...pagination, isLastPage: res.data.isLastPage });
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
      const isLastPage: boolean = response.data.isLastPage;

      console.warn(response.data);

      setPosts([...posts, ...blogs]);

      setPagination({ ...pagination, page: pagination.page + 1, isLastPage });
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
      {pagination.isLastPage ? (
        <h1 className="w-full text-4xl text-center my-4">
          You have reached the end...
        </h1>
      ) : (
        <button className="browse-loader" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};
