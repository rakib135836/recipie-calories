
import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';

const Cook = ({ cooks }) => {
    console.log(cooks);
    return (
        <div className="w-full lg:w-1/3 border-2 border-gray-300 mt-10 rounded-xl">
            <div >
                <p className='text-center p-5'>Want to cook :0{cooks.length}</p> <hr />
                <table>
                    <div className='flex gap-24'>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </div>
                </table>
                {cooks.map(cooking => <Cooking key={cooking.recipe_id} cooking={cooking}></Cooking>)}
            </div>

            
                
            
        </div>

    );
};

Cook.propTypes = {
    cooks: PropTypes.array
};

export default Cook;
