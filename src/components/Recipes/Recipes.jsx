import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from'prop-types'


const Recipes = ({handelAddToCook}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="w-full lg:w-2/3">
            {/* <p>recipe {recipes.length}</p> */}
            <div  className="grid grid-cols-2 gap-6">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handelAddToCook={handelAddToCook}></Recipe>)
                }
            </div>
        </div>
    );
};
Recipes.propTypes={
    handelAddToCook:PropTypes.func
}

export default Recipes;