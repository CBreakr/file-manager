import React from 'react';
import axios from 'axios';
import { getRecipes } from './api/recipeApi';
import { mapIntoObject } from './utils/data_structure_util';
import RecipeList from './RecipeList';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { recipes: {} }

    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentWillMount() {
    axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    getRecipes().then(response => {
      this.setState({ recipes: mapIntoObject(response.data) })
    }).catch(error => {
      console.log(error);
    });
  }

  updateRecipe = recipe => {
    const { recipes } = this.state;
    recipes[recipe.id] = recipe;
    this.setState({ recipes }, () =>
      alert(`Recipe ${recipe.title} updated!`)
    );
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
