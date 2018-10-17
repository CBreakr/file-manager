import React from 'react';
import PropTypes from 'prop-types';

const NonEditableRecipe = ({ recipe }) => {
  let imageSrc = recipe.image !== null ?
    recipe.image.url : "https://bulma.io/images/placeholders/1280x960.png";

  return (
    <React.Fragment>
      <div className="card-image">
        <figure className="image is-5by4">
          <img src={imageSrc} alt="Recipe image" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{recipe.title}</p>
        <div className="content">
          <p>{recipe.description}</p>
          <time>{recipe.updated_at.toLocaleString()}</time>
        </div>
      </div>
    </React.Fragment>
  )
}

NonEditableRecipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.integer,
    description: PropTypes.string,
    image: PropTypes.shape({url: PropTypes.string}),
    title: PropTypes.string,
    instruction: PropTypes.string,
    updated_at: PropTypes.string
  }).isRequired
};

export default NonEditableRecipe;
