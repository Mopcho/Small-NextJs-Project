import { IBlogPost } from '@/lib/types';
import axios from 'axios';

export default async function SinglePostPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get(
    `http://localhost:3000/api/blogs/${params.id}`
  );
  const blog: IBlogPost = response.data;

  return (
    <section className="custom-container h-full bg-custom-black">
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </section>
  );
}
