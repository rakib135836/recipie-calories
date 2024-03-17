import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes]=useState([]);
    useEffect( ()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data =>setRecipes(data))
    },[])

    return (
        <div className="w-full lg:w-2/3">
            <p>recipe {recipes.length}</p>
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;