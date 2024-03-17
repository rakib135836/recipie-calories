import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Head = () => {

    return (
        <div className="flex items-center justify-between mb-9">
            <h1 className="text-4xl font-bold"> Recipe Calories</h1>

            <div>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>

            <div className='flex flex-row items-center gap-2'>
                <div className="relative">
                    <input type="text" placeholder="Search..." className="py-2 pl-8 pr-4 rounded-2xl bg-gray-200  focus:outline-none focus:border-blue-500" />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FaSearch className=" text-gray-400" />
                    </div>

                </div>
                <span> <CgProfile className='text-5xl bg-green-300 rounded-full'></CgProfile></span>
            </div>
        </div>
    );
};

export default Head;