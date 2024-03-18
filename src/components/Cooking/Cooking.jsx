import  { useState } from 'react';
import PropTypes from 'prop-types';

const Cooking = ({ cooking }) => {
    const { recipe_name, preparing_time, calories } = cooking;
    const [hideTable, setHideTable] = useState(false);

    const toggleTableVisibility = () => {
        setHideTable(!hideTable);
    };

    return (
        <div className='border-2 rounded-xl m-3 p-2'>
            <table style={{ display: hideTable ? 'none' : 'block' }}>
                <tr className='flex gap-6'>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                </tr>
            </table>
            <button
                className="py-2 px-4 font-semibold bg-green-400 text-black rounded-3xl hover:bg-green-500"
                onClick={toggleTableVisibility}
            >
                Preparing
            </button>
            {hideTable && <NewComponent cooking={cooking} />}
        </div>
    );
};

Cooking.propTypes = {
    cooking: PropTypes.object
};

export default Cooking;

const NewComponent = ({ cooking }) => {
    const { recipe_name, preparing_time, calories } = cooking;

    return (

        <div className='border-2 rounded-xl m-3 p-2'>
            

            <p className='text-center p-5'>currently cooking :0{cooking.length }</p> <hr />
            <table>
                <div className='flex gap-24'>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </div>
                <tr className='flex gap-6'>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                </tr>
            </table>
            {/* {cooks.map(cooking => <Cooking key={cooking.recipe_id} cooking={cooking}></Cooking>)} */}
        </div>
    );
};

NewComponent.propTypes = {
    cooking: PropTypes.object
};

