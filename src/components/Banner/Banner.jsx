
import backgroundImage from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div className="bg-cover bg-center p-28 text-center rounded-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>


            <h1 className='text-6xl text-white font-bold p-4'>Discover an exceptional cooking <br />
                class tailored for you!
            </h1>

            <p className='text-[#dadada] mb-5'>Join us for an unforgettable culinary journey at our Cooking Class!
                Whether you're a novice in the kitchen or a seasoned chef,
                our <br /> classes cater to all skill levels and are designed to inspire creativity,
                foster learning, and cultivate a love for cooking.

            </p>

            <div className='flex gap-6 justify-center p-6'>
                <button className="p-4 bg-green-400 text-black rounded-3xl  hover:bg-green-500">Explore Now</button>
                <button className="capitalize p-4 text-white rounded-3xl border-2 border-white hover:bg-green-200 hover:text-black">our feedback</button>

            </div>

        </div>
    );
};

export default Banner;