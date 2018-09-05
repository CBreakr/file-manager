import React from 'react';
import axios from 'axios';
import EditableRecipe from './EditableRecipe';
import NonEditableRecipe from './NonEditableRecipe';


class RecipeToggle extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false
    }
  }

  toogle = () => {
    this.setState(currentState => {
      return { isEditable: !currentState.isEditable }
    });
  }

  render() {
    return this.props.children({
      isEditable: this.state.isEditable,
      toogle: this.toogle
    })

    // return React.Children.map(this.props.children, childElement => {
    //   return React.cloneElement(childElement, {
    //     isEditable={this.state.isEditable}
    //     recipe={this.props.recipe}
    //     toogleIsEditable={this.toogleIsEditable}

    //   })
    // })
  }
}

export default class Recipe extends React.PureComponent {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update = recipe => {
    axios({
      method: 'post',
      url: `/api/recipes/${this.props.recipe.id}`,
      data: recipe,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then(response => {
      this.props.updateRecipe(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <RecipeToggle>
        {
          ({isEditable, toogle}) => (
            <div className="column is-one-third">
              {isEditable
                ?
                <EditableRecipe
                  recipe={this.props.recipe}
                  update={this.update}
                  toogle={toogle} />
                :
                <NonEditableRecipe recipe={this.props.recipe} />
              }
              <a
                className="button is-primary"
                onClick={() => toogle()}>
                  {isEditable ? 'Close' : 'Edit'}
              </a>
            </div>
          )
        }
      </RecipeToggle>
    )
  }
}
