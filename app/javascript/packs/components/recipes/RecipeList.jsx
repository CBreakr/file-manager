import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const RecipeList = ({ recipes, updateRecipe }) => (
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


RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateRecipe: PropTypes.func.isRequired
};

export default RecipeList;
