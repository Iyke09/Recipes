import React from 'react';
import jwt from 'jwt-decode';
import Photo from './Photo';
import Comments from './Comments';
import { browserHistory } from 'react-router';

const Single = React.createClass({
  handleSubmit(e, val) {
    e.preventDefault();
    const id = this.refs.id.value;
    const content = this.refs.content.value
    this.props.addComment(id,'ok',content);
    this.refs.addcomment.reset();

    this.props.getSingle(id)
    location.reload()
  },
  componentWillUnmount(){
    location.reload()
  },
  renderComment(comment, i){
    return(
      <li className="w3-display-container"><span style={{fontSize: 12}}>
      <span className="text-blue">#{comment.email}</span> Lorem ipsum dolor sit amet, {comment.content}.</span><br/>
      <small className="text-grey">fri at 10:23am | <span className="text-blue">Like</span> | reply</small>
       <span onclick="this.parentElement.style.display='none'"
      className="w3-button w3-transparent w3-display-right text-red">&times;</span>
      </li>
    )

  },
  render() {
    if(window.location.pathname.match(/details/g) && this.props.single.length === 0){
      console.log('true')
      const Id = this.props.params.cart;
      this.props.getSingle(Id)
    }
    const user = localStorage.getItem('token')
    const decoded = jwt(user);
    const fav = (id) => {
      let result = [];
      let result2 = []
      for(let fav of this.props.favorite){
          for (let x in fav){
              if(x === 'userId' && fav[x] === decoded.user.id){
                 result.push(fav)
              }
          }
      }
      for(let x of result){
        result2.push(x.recipeId)
      }
      if(result2.indexOf(id) !== -1){
        return true
      }else{
        return false
      }
    }
    const single = this.props.single;
    const comments = this.props.comment
    console.log(single, comments)
    return (
    <div className="">
        <div id="" className="row">
          <div className="col-sm-8 display-container">
            <img src={single.image}
            className="img-responsive greyscale-min dlt-img"/>
            <section className=" display-hover display-bottommiddle sect">
              <div className="text-white padding-large dlt-sect">
                <p className="left-align dlt-para"><span className="text-blue dlt-para2">#<b>{single.user}</b></span> <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                {single.caption} </i><br/><span className="text-blue"><i className="fa fa-heart"></i> {single.likes}  /
                  <i className="fa fa-comment-o"></i> {single.comments}</span></p>
              </div>
            </section>

            <div className="">
              <section className="rightalign4" style={{right: 25, top: 10}}>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"
                    style={ fav(single.id) ? {color: 'red'} : {color: 'black'} }>
                  </i>
                  <i className="fa fa-heart fa-stack-1x fa-inverse text-white"
                    onClick={ this.props.favRecipe.bind(null, single.id) }>
                  </i>
                </span>
              </section>

              <section className="rightalign5">
                <span className="fa-stack fa-lg center">
                  <i className="fa fa-circle fa-stack-2x fa-color"></i>
                  <i className="material-icons fa-stack-1x fa-inverse text-white fa-icon">share</i>
                </span>
              </section>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="">
              <ul className="w3-ul dlt-ul">
                {comments.map(this.renderComment)}
              </ul>
              <div className="div-frm">
                <form className="" ref="addcomment" onSubmit={this.handleSubmit}>
                  <input type="text" ref="content" className="input border" name="content" placeholder="  Leave a comment..." id="i-desc"/>
                  <input type="submit" ref='id' value={single.id} hidden/>
                </form>
              </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
});

export default Single;
