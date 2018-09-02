import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';

function mapIntoObject(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {}
      // recipes: {
      //   1: { id: 1, title: 'Recipe1', description: 'Recipe1 description', instruction: 'Some instruction.', updated_at: new Date(), image: null },
      //   2: { id: 2, title: 'Recipe2', description: 'Recipe2 description', instruction: 'Some instruction', updated_at: new Date(), image: null }
      // }
    }

    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentWillMount() {
    axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    axios.get('/api/recipes')
      .then(response => {
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
