import React from 'react';

const NonEditableRecipe = ({ recipe, toogleIsEditable }) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{recipe.title}</p>
          <div className="content">
            {recipe.description}
            <br></br>
            <time>{recipe.updated_at.toLocaleString()}</time>
          </div>
          <a
            className="button is-primary"
            onClick={() => toogleIsEditable()}>
              Edit
          </a>
        </div>
      </div>
    </div>
  )
}

export default NonEditableRecipe;
