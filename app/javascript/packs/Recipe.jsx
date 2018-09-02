import React, { Component } from 'react';
import axios from 'axios';
import EditableRecipe from './EditableRecipe';
import NonEditableRecipe from './NonEditableRecipe';

export default class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false
    }

    this.update = this.update.bind(this);
  }

  toogleIsEditable = () => {
    this.setState(
      currentState => {
        return { isEditable: !currentState.isEditable }
      }
    );
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

    this.toogleIsEditable();
  }

  render() {
    const { recipe } = this.props;
    const { isEditable } = this.state;

    if(isEditable) {
      return <EditableRecipe
        recipe={recipe}
        update={this.update}
        toogleEditMode={this.toogleIsEditable}
      />
    }

    return (
      <NonEditableRecipe
        recipe={recipe}
        toogleEditMode={this.toogleIsEditable}
      />
    );
  }
}
