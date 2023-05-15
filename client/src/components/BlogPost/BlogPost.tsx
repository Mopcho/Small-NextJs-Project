import IMAGE from '../../public/images/homepage-image.jpg';

export const BlogPost: React.FC = () => {
    return (
        <div className="blog-post">
            <a className='cursor-pointer rounded-2xl overflow-hidden max-w-max'>
                <img src={IMAGE.src} alt="just" className='max-h-[150px]'/>
            </a>
            <div>
                <a className='text-white text-xl font-bold decoration-custom-green hover:underline underline-offset-4 cursor-pointer block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic.</a>
                <a className='text-custom-cyan hover:underline underline-offset-4 decoration-custom-green block cursor-pointer'>Mopcho</a>
                <p className='text-custom-yellow'>30 minutes ago</p>
            </div>
        </div>
    )
}