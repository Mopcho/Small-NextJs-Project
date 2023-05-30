import { IBlogPost } from '@/lib/types';

export const SignlePost = (blog: IBlogPost) => {
  return (
    <div>
      <img src="" alt="" />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};
