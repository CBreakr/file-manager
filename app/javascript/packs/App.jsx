import React, { Component } from 'react';
import RecipeList from './RecipeList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {
        1: { id: 1, title: 'Recipe1', description: 'Recipe1 description', instruction: 'Some instruction.', updated_at: new Date() },
        2: { id: 2, title: 'Recipe2', description: 'Recipe2 description', instruction: 'Some instruction', updated_at: new Date() }
      }
    }

    this.updateRecipe = this.updateRecipe.bind(this);
  }

  updateRecipe = (recipe) => {
    const { recipes } = this.state;
    recipes[recipe.id] = recipe;
    this.setState({ recipes });
    alert(`Recipe ${recipe.title} updated!`);
  }

  render() {
    const { recipes } = this.state;

    return (
      <section className="section">
        <div className="container">
          <RecipeList
            recipes={Object.values(recipes)}
            updateRecipe={this.updateRecipe}
          />
        </div>
      </section>
    );
  }
}
