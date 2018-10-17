import React, { Component } from 'react';
import ImageUploader from '../shared/ImageUploader';
import '../../styles/recipe';

class EditableRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editableRecipe: this.props.recipe,
      selectedImage: this.props.recipe.image
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

    let { editableRecipe } = this.state;
    editableRecipe = {...editableRecipe, [name]: value}
    this.setState({ editableRecipe });
  }

  handleSubmit = event => {
    event.preventDefault();
    const formRecipeData = new FormData(event.target);
    formRecipeData.append('image', this.state.selectedImage);
    this.props.submit(formRecipeData);
  }

  selectImage = image => {
    this.setState({ selectedImage: image });
  }

  unselectImage = image => {
    if(this.state.selectedImage && this.state.selectedImage.name !== image.name) return;

    this.setState({ selectedImage: '' });
  }

  render() {
    const { editableRecipe } = this.state;

    return (
      <React.Fragment>
        <div className="card-image card-padding">
          <ImageUploader
            image={editableRecipe.image}
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
                value={editableRecipe.title}
                onChange={this.handleInputChange} />
            </div>
            <label htmlFor="description" className="label">Description</label>
            <div className="control">
              <textarea
                id="description"
                name="description"
                className="textarea"
                value={editableRecipe.description}
                onChange={this.handleInputChange} />
            </div>
            <label htmlFor="instruction" className="label">Instruction</label>
            <div className="control">
              <textarea
                id="instruction"
                name="instruction"
                className="textarea"
                value={editableRecipe.instruction}
                onChange={this.handleInputChange} />
            </div>
            <div className="control has-text-left editable-buttons">
              <input type="submit" value="Submit" className="button is-danger" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditableRecipe;
