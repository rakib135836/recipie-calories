import PropTypes from 'prop-types';

const Cooking = ({ cooking }) => {
    const { recipe_name, preparing_time, calories } = cooking;

    return (
        <div className='border-2 rounded-xl m-3 p-2'>
            <table>
                <tr className='flex gap-6'>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                </tr>
            </table>
            <button className="py-2 px-4 font-semibold bg-green-400 text-black rounded-3xl  hover:bg-green-500">Preparing</button>
        </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object
}
export default Cooking;