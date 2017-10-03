import React, { Component } from 'react';

const signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const recipe = this.props.edit[0]
    const caption = this.refs.caption.value;
    const image = this.refs.image.value;
    const category = this.refs.category.value;
    this.props.editRecipex(recipe.id,caption, image, category);
    this.refs.addForm.reset();
  },
  render() {
    const errorMessage = this.props.error.pop();
    let errorMessages = '_';
    if(errorMessage !== undefined){
       errorMessages = errorMessage.message
    }
    const recipe = this.props.edit[0]
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <div className="card">
                <div className="card-body mx-4">
                  <form className="form-elegant" ref="addForm" onSubmit={this.handleSubmit}>
                    <p className="h5 text-center mb-4">Edit Recipe</p>
                    <h6 className="text-center" style={{color: 'red'}}>{ errorMessages }</h6>
                    <div className="md-form">
                        <input type="text" id="orangeForm-name" className="form-control"
                        ref="image" placeholder="Title" defaultValue={recipe.image}/>
                    </div>
                    <div className="md-form">
                        <input type="text" id="orangeForm-email" className="form-control"
                        ref="caption" placeholder="Image_Url" defaultValue={recipe.caption}/>
                    </div>

                    <div className="md-form">
                        <input type="text" id="orangeForm-pass" className="form-control" ref="category"
                        placeholder="Category" defaultValue={recipe.category}/>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-deep-orange btn-rounded btn-block">edit Recipe</button>
                    </div>
                    </form>
                </div>
            </div>
         </div>
      </div>

    )
  }
});

export default signup;
