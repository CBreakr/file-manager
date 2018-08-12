import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes, updateRecipe }) => {
  return (
    <div className="columns">
      {
        recipes.map(recipe =>
          <Recipe
            key={recipe.id}
            recipe={recipe}
            updateRecipe={updateRecipe}
          />
        )
      }
    </div>
  )
}

export default RecipeList;
