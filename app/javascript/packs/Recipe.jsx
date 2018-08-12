import React, { Component } from 'react';
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
    this.setState({ isEditable: !this.state.isEditable })
  }

  update = (recipe) => {
    this.props.updateRecipe(recipe);
    this.toogleIsEditable();
  }

  render() {
    const { recipe } = this.props;
    const { isEditable } = this.state;

    if(isEditable) {
      return <EditableRecipe
        recipe={recipe}
        update={this.update}
      />
    }

    return (
      <NonEditableRecipe
        recipe={recipe}
        toogleIsEditable={this.toogleIsEditable}
      />
    );
  }
}
