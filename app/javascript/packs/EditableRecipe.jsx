import React, { Component } from 'react';
import ImageUploader from './ImageUploader';
import './styles/recipe';

class EditableRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: this.props.recipe,
      selectedImage: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.unselectImage = this.unselectImage.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { recipe } = this.state;
    recipe = { ...recipe, [name]: value }
    this.setState({ recipe });
  }

  selectImage = image => {
    this.setState({ selectedImage: image });
  }

  unselectImage = image => {
    return if image.name !== this.state.selectedImage.name;

    this.setState({ selectedImage: null });
  }

  handleSubmit = event => {
    event.preventDefault();
    const formRecipeData = new FormData(event.target);
    formRecipeData.append('image', this.state.selectedImage);
    this.props.update(formRecipeData);
  }

  render() {
    const { recipe } = this.state;

    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image card-padding">
            <ImageUploader
              image={recipe.image}
              selectImage={this.selectImage}
              unselectImage={this.unselectImage} />
          </div>
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title" className="label">Title</label>
                <div className="control">
                  <input
                    id="title"
                    name="title"
                    className="input"
                    type="text"
                    value={recipe.title}
                    onChange={this.handleInputChange} />
                </div>
                <label htmlFor="description" className="label">Description</label>
                <div className="control">
                  <textarea
                    id="description"
                    name="description"
                    className="textarea"
                    value={recipe.description}
                    onChange={this.handleInputChange} />
                </div>
                <label htmlFor="instruction" className="label">Instruction</label>
                <div className="control">
                  <textarea
                    id="instruction"
                    name="instruction"
                    className="textarea"
                    value={recipe.instruction}
                    onChange={this.handleInputChange} />
                </div>
              <div className="control has-text-right">
                <input type="submit" value="Submit" className="button is-danger" />
              </div>
            </form>
            <a
              className="button is-primary"
              onClick={() => this.props.toogleEditMode()}>
                Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default EditableRecipe;
