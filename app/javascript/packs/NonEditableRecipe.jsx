import React from 'react';

const NonEditableRecipe = ({ recipe, toogleEditMode }) => {
  let imageSrc = recipe.image !== null ?
    recipe.image.url : "https://bulma.io/images/placeholders/1280x960.png";

  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by4">
            <img src={imageSrc} alt="Recipe image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{recipe.title}</p>
          <div className="content">
            {recipe.description}
            <br></br>
            <time>{recipe.updated_at.toLocaleString()}</time>
            <div className="control has-text-right">
              <a
                className="button is-primary"
                onClick={() => toogleEditMode()}>
                  Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NonEditableRecipe;
