import Image from 'next/image';
import IMAGE from '../../public/images/homepage-image.jpg';

export const BlogPost = (): JSX.Element => {
  return (
    <div className="blog-post">
      <div className="cursor-pointer rounded-2xl overflow-hidden max-w-max">
        <Image src={IMAGE.src} alt="just" className="max-h-[150px]" />
      </div>
      <div>
        <a
          className="text-white text-xl font-bold decoration-custom-green hover:underline underline-offset-4 cursor-aointer block"
          href="/something"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic.
        </a>
        <a
          className="text-custom-cyan hover:underline underline-offset-4 decoration-custom-green block cursor-pointer"
          href="/something"
        >
          Mopcho
        </a>
        <p className="text-custom-yellow">30 minutes ago</p>
      </div>
    </div>
  );
};
