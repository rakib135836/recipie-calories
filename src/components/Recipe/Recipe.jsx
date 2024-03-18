import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";
import  { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe, handelAddToCook }) => {
    const { recipe_name, short_description, ingredients, recipe_image, preparing_time, calories } = recipe;

    
    const [clickCount, setClickCount] = useState(0);

  
    const handleClick = () => {
        handelAddToCook(recipe);
        setClickCount(prevCount => prevCount + 1);

        
        if (clickCount > 0) {
            notify();
        }
    };

    
    const notify = () => {
        toast("Button clicked more than once!");
    };

    return (
        <div className='border border-gray-300 p-5 rounded-xl my-10'>
            <div className='mb-4 '>
                <img className='h-80 w-full rounded-xl' src={recipe_image} alt="" />
            </div>
            <div className='mb-4'>
                <h2 className='font-bold text-xl'>{recipe_name}</h2>
                <p className='text-base text-gray-500'>{short_description}</p>
            </div>
            <hr />
            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>ingredients:{ingredients.length}</h1>
                <ul className='list-disc ml-5 py-6'>
                    {ingredients.map((ingredient, idx) => <li className='text-base text-gray-500' key={idx}>{ingredient}</li>)}
                </ul>
            </div>
            <div className='flex gap-4 mb-2'>
                <div className='flex items-center gap-2'>
                    <span><CiClock2 /></span>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span><FaFireAlt /></span>
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={handleClick} className="py-2 px-4 font-semibold bg-green-400 text-black rounded-3xl hover:bg-green-500">want to cook</button>
            <ToastContainer />
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handelAddToCook: PropTypes.func.isRequired
};

export default Recipe;




