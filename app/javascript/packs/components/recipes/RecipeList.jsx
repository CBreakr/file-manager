import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const RecipeList = ({ recipes, update }) => (
  <div className="columns">
    {
      recipes.map(recipe =>
        <Recipe
          key={recipe.id}
          recipe={recipe}
          update={update}
        />
      )
    }
  </div>
)

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  update: PropTypes.func.isRequired
};

export default RecipeList;
