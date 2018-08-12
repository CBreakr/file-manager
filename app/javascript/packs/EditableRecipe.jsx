import React, { Component } from 'react';

class EditableRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: this.props.recipe
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { recipe } = this.state;
    recipe = { ...recipe, [name]: value }
    this.setState({ recipe });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.update(this.state.recipe);
  }

  render() {
    const { recipe } = this.state;

    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    name="title"
                    className="input"
                    type="text"
                    value={recipe.title}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <br></br>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    name="description"
                    className="textarea"
                    value={recipe.description}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Instruction</label>
                <div className="control">
                  <textarea
                    name="instruction"
                    className="textarea"
                    value={recipe.instruction}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <input type="submit" value="Submit" className="button is-danger" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditableRecipe;
