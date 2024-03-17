import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipe_name,short_description,ingredients,recipe_image}=recipe;
    return (
        <div>
            <img src={recipe_image} alt="" />
            <h2>{recipe_name}</h2>
            <p>{short_description}</p>
            <h1>ingredients:{ingredients.length}</h1>
            <ul>
                {ingredients.map ((ingredient,idx) =><li key={idx}>{ingredient}</li>)}
            </ul>
        </div>
    );
};
Recipe.propTypes={
    recipe:PropTypes.object.isRequired
   
}

export default Recipe;