import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { updateRecipe } from '../../api/recipeApi';
import EditableRecipe from './EditableRecipe';
import NonEditableRecipe from './NonEditableRecipe';
import '../../styles/recipe';

class RecipeToggle extends PureComponent {
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

  submit = (formData, recipe) => {
    this.props.onSubmit({formData, recipe},
      () => this.toogle()
    );
  }

  render() {
    return this.props.children({
      isEditable: this.state.isEditable,
      toogle: this.toogle,
      submit: this.submit
    })
  }
}

const Recipe = ({ recipe, update }) => (
  <RecipeToggle onSubmit={update} >
    {
      ({isEditable, toogle, submit}) => (
        <div className="column is-one-third">
          <div className="card">
            {isEditable
              ?
              <EditableRecipe
                recipe={recipe}
                submit={submit}
                toogle={toogle} />
              :
              <NonEditableRecipe recipe={recipe} />
            }
            <div className="has-text-right buttons-padding">
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

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.integer,
    description: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    instruction: PropTypes.string,
    updated_at: PropTypes.string
  }).isRequired
};

export default Recipe;
