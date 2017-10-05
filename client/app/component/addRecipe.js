import React, { Component } from 'react';

const signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const image = this.refs.image.value;
    const category = this.refs.category.value;
    const caption = this.refs.caption.value;

    this.props.addPhoto(image, category, caption);
    this.refs.addForm.reset();
  },
  render() {
    const errorMessage = this.props.error.pop();
    console.log(errorMessage)
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <div className="card-4">
              <form className="w3-container padding-large padding-16" ref="addForm" onSubmit={this.handleSubmit}>
                <h3 className="center">Add Photo</h3>
                <label className="w3-text-black"><b>Caption:</b></label>
                <textarea type="text" rows="5" ref="caption"></textarea>

                <label className="w3-text-black"><b>Image_Url</b></label>
                <input className="w3-input w3-border w3-light-grey" ref="image" type="text"/>

                <select className="w3-select" ref="category" name="option">
                  <option disabled selected>Select a Category</option>
                  <option>travel</option>
                  <option>fashion</option>
                  <option>wild</option>
                </select><br/>

                <button className="w3-btn w3-blue-grey">Post</button>
              </form>
            </div>
         </div>
      </div>
    )
  }
});

export default signup;
