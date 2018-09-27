import React from 'react';
import PropTypes from 'prop-types';
import { updateRecipe } from './api/recipeApi';
import EditableRecipe from './EditableRecipe';
import NonEditableRecipe from './NonEditableRecipe';

class RecipeToggle extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = { isEditable: false }

  toogle = () => {
    this.setState(currentState => {
      return { isEditable: !currentState.isEditable }
    });
  }

  submit = recipe => {
    this.props.onSubmit(recipe, () => {
      this.setState(this.initialState);
    });
  }

  render() {
    return this.props.children({
      isEditable: this.state.isEditable,
      toogle: this.toogle,
      submit: this.submit
    })
  }
}

export default class Recipe extends React.PureComponent {
  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.integer,
      description: PropTypes.string,
      image: PropTypes.object,
      title: PropTypes.string,
      instruction: PropTypes.string,
      updated_at: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      recipe: this.props.recipe
    }
    this.update = this.update.bind(this);
  }

  update = (formData, toogle) => {
    updateRecipe(formData, this.state.recipe.id).then(response => {
      this.setState({ recipe: response.data }, () => {
        toogle();
      })
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <RecipeToggle onSubmit={this.update} >
        {
          ({isEditable, toogle, submit}) => (
            <div className="column is-one-third">
              <div className="card">
                {isEditable
                  ?
                  <EditableRecipe
                    recipe={this.state.recipe}
                    submit={submit}
                    toogle={toogle} />
                  :
                  <NonEditableRecipe recipe={this.state.recipe} />
                }
                <div className="has-text-right">
                  <a
                    className="button is-primary"
                    onClick={toogle}>
                      {isEditable ? 'Close' : 'Edit'}
                  </a>
                </div>
              </div>
            </div>
          )
        }
      </RecipeToggle>
    )
  }
}
