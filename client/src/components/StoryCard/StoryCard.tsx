import IMAGE from '../../public/images/homepage-image.jpg';

export const StoryCard: React.FC = () => {
    return (
        <div className="storycard">
            <div>
                <a className='text-white text-xl font-bold decoration-custom-green hover:underline underline-offset-4 cursor-pointer block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic.</a>
                <a className='custom-green hover:underline underline-offset-4 decoration-custom-green block cursor-pointer'>Mopcho</a>
                <p className='custom-gray'>30 minutes ago</p>
            </div>
            <img src={IMAGE.src} alt="just" />
        </div>
    )
}