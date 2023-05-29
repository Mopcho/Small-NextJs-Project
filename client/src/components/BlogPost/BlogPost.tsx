import IMAGE from '../../public/images/homepage-image.jpg';

interface Props {
  title: string;
  username: string;
  createtAt: string;
}

export const BlogPost = ({
  title,
  username,
  createtAt,
}: Props): JSX.Element => {
  return (
    <div className="blog-post">
      <div className="cursor-pointer rounded-2xl overflow-hidden max-w-max">
        <img src={IMAGE.src} alt="just" className="max-h-[150px]" />
      </div>
      <div>
        <a
          className="text-white text-xl font-bold decoration-custom-green hover:underline underline-offset-4 cursor-aointer block"
          href="/something"
        >
          {title}
        </a>
        <a
          className="text-custom-cyan hover:underline underline-offset-4 decoration-custom-green block cursor-pointer"
          href="/something"
        >
          {username}
        </a>
        <p className="text-custom-yellow">{createtAt}</p>
      </div>
    </div>
  );
};
