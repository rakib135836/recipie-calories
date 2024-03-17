import { useEffect } from "react";
import { useState } from "react";


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
        </div>
    );
};

export default Recipes;