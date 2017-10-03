import React from 'react';
import { Link } from 'react-router';
import jwt from 'jwt-decode';

const Gallery = React.createClass({
  handleSubmit(e, val) {
    e.preventDefault();
    for(let x in this.refs){
      if(this.refs[x].value !== ''){
        console.log('yyayyyo ' + x)
        console.log('value: ' + this.refs[x].value)
        const id = this.refs.id.value;
        const content = this.refs[x].value
        this.props.addComment(x,'ok',content);
        this.refs[x].value = '';
        console.log('content ' + content)
        this.refs.addcomment.reset();
        break;
      }
    }
    this.props.getPhoto(this.props.params.id)
  },
  renderPhoto(res, i) {
    const arr = ['content1','content2'];
    const user = localStorage.getItem('token')
    const decoded = jwt(user);
    console.log(this.props.favorite)
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
    const randLen = Math.floor((Math.random() * 100) + 300);
    const myStyle = { height: randLen }
    return (
    <div className=" display-container display">
        <img className="grid-img greyscale-min" src={res.image}
        style={myStyle}/>
      <div className="">
        <section className="display-hover display-bottommiddle grid-sect">
          <div className="text-white grid-desc">
            <p className="left-align grid-para">
              <span className="text-blue grid-span">#<b>{res.user}</b>
              </span> <i> {res.caption}...<Link to={`/gallery/${this.props.params.id}/details/${res.id}`}
                onClick={ this.props.getSingle.bind(null, res.id) }><span className="text-blue">More
                  </span></Link>
                </i><br/><span className="text-blue"><i className="fa fa-heart"></i> {res.likes}  /
                <i className="fa fa-comment-o"></i> { res.comments } </span>
            </p>
          </div>
        </section>
        <div className="display-hover">
          <section className="rightalign2">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"
                style={ fav(res.id) ? {color: 'red'} : {color: 'black'} }>
              </i>
              <i className="fa fa-heart fa-stack-1x fa-inverse text-white"
                onClick={ this.props.favRecipe.bind(null, res.id) }>
              </i>
            </span>
          </section>

          <section className="rightalign3">
            <span className="fa-stack fa-lg center">
              <i className="fa fa-circle fa-stack-2x fa-color"></i>
              <i className="material-icons fa-stack-1x fa-inverse text-white fa-icon">share</i>
            </span>
          </section>
        </div>
      </div>
    </div>
    )
  },
  renderPhoto2(res, i) {
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
    const randLen = Math.floor((Math.random() * 100) + 300);
    const myStyle = { height: randLen }
    return (
    <div className=" display-container display">
        <img className="grid-img greyscale-min" src={res.image}
        style={myStyle} />
      <div className="">
        <section className="display-hover display-bottommiddle grid-sect">
          <div className="text-white grid-desc">
            <p className="left-align grid-para">
              <span className="text-blue grid-span">#<b>{res.user}</b>
              </span> <i> {res.caption}...<Link to={`/gallery/${this.props.params.id}/details/${res.id}`}
                onClick={ this.props.getSingle.bind(null, res.id) }><span className="text-blue">More
                  </span></Link>
                </i><br/><span className="text-blue"><i className="fa fa-heart"></i> {res.likes}  /
                <i className="fa fa-comment-o"></i> {res.comments} </span>
            </p>
          </div>
        </section>
        <div className="display-hover">
        <section className="rightalign2">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"
              style={ fav(res.id) ? {color: 'red'} : {color: 'black'} }>
            </i>
            <i className="fa fa-heart fa-stack-1x fa-inverse text-white"
              onClick={ this.props.favRecipe.bind(null, res.id) }>
            </i>
          </span>
        </section>

          <section className="rightalign3">
            <span className="fa-stack fa-lg center">
              <i className="fa fa-circle fa-stack-2x fa-color"></i>
              <i className="material-icons fa-stack-1x fa-inverse text-white fa-icon">share</i>
            </span>
          </section>
        </div>
      </div>
    </div>
    )
  },
  renderPhoto3(res, i) {
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
    const randLen = Math.floor((Math.random() * 100) + 300);
    const myStyle = { height: randLen }
    return (
    <div className=" display-container display">
        <img className="grid-img greyscale-min" src={res.image}
        style={myStyle} />
      <div className="">
        <section className="display-hover display-bottommiddle grid-sect" >
          <div className="text-white grid-desc">
            <p className="left-align grid-para">
              <span className="text-blue grid-span">#<b>{res.user}</b>
              </span> <i> {res.caption}...<Link to={`/gallery/${this.props.params.id}/details/${res.id}`}
                onClick={ this.props.getSingle.bind(null, res.id) }><span className="text-blue">More
                  </span></Link>
                </i><br/><span className="text-blue"><i className="fa fa-heart"></i> {res.likes}  /
                 <i className="fa fa-comment-o"></i> {res.comments} </span>
            </p>
          </div>
        </section>
        <div className="display-hover">
        <section className="rightalign2">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"
              style={ fav(res.id) ? {color: 'red'} : {color: 'black'} }>
            </i>
            <i className="fa fa-heart fa-stack-1x fa-inverse text-white"
              onClick={ this.props.favRecipe.bind(null, res.id) }>
            </i>
          </span>
        </section>

          <section className="rightalign3">
            <span className="fa-stack fa-lg center">
              <i className="fa fa-circle fa-stack-2x fa-color"></i>
              <i className="material-icons fa-stack-1x fa-inverse text-white fa-icon">share</i>
            </span>
          </section>
        </div>
      </div>
    </div>
    )
  },
  render() {
    let single = this.props.single.pop();
    if(single === undefined){
      single = {image: 'helllo'}
    }
    if(window.location.pathname.match(/gallery/g) && this.props.gallery.length === 0){
      console.log('true')
      const Id = this.props.params.id;
      this.props.getPhoto(Id)
    }
    const photo = this.props.params.id;
    const object = {
      travel: 'TRAVEL',
      nature: 'NATURE',
      fashion: 'FASHION',
    }
    const title = object[photo]
    const gallery = this.props.gallery
    let base = Math.ceil(gallery.length / 3)
    const set1 = gallery.slice(0,base)
    const set2 = gallery.slice(base ,base * 2)
    const set3 = gallery.slice(base * 2,base * 3)
    return (
      <div className="">
        <div className="bgimg display-container animate-opacity text-white view">
          <img className="responsive" src={`/images/${photo}.jpeg`} alt=""/>
          <div className="display-topleft padding-large xlarge ">
              ZODIAK
          </div>
          <div className="display-topright padding-large xlarge text-white">
            <div className="bar padding " style={{letterSpacing: 4,fontSize: 12}}>
              <div className="right hide-small">
                <a href="#about" className="bar-item button text-white " >HOME</a>
                <a href="#menu" className="bar-item button text-white">ROOMS</a>
                <a href="#contact" className="bar-item button text-white">RESERVATION</a>
                <a href="#menu" className="bar-item button text-white">FEATURES</a>
                <a href="#contact" className="bar-item button text-white">ACCOUNTS</a>
              </div>
            </div>
          </div>

          <div className="display-middle center white-text">
            <h3 className="wide hide-small">- WE TAKE THE TIME TO -</h3>
            <p className="animate-left center wide hide-small bg-para">{ title }</p>
            <button className="butt animate-bottom wide"><b>BE INSPIRED</b></button>
          </div>
          <section className="bg-overlay">
          </section>
        </div>
        <div className="padding-large center padding-32">
          <h3 className="wide">- YOU DON’T TAKE A PHOTOGRAPH, YOU MAKE IT -</h3>
          <p className="padding-large line">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been<br/> the industry’s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="padding-large">
            <div className="padding-32">
              <div className="bar border">
                <a href="#" className="bar-item button">Home</a>
                <a href="#" className="bar-item button light-grey">Portfolio</a>
                <a className="bar-item button hide-small">
                  <Link to={`/gallery/${this.props.params.id}/slideshow`}
                  onClick={this.props.getPhoto.bind(null, this.props.params.id)}>
                    Slideshow
                  </Link>
                </a>
                <Link to="/auth/profile"
                onClick={this.props.getProfile.bind(null, this.props.params.id)}>
                  <a className="bar-item button">Profile</a>
                </Link>
              </div>
            </div>
            <div className="row padding-large" id="myGrid" style={{marginBottom: 128}}>
              <div className="third">
                {set1.map(this.renderPhoto)}
              </div>

              <div className="third">
                {set2.map(this.renderPhoto2)}
              </div>

              <div className="third">
                {set3.map(this.renderPhoto3)}
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default Gallery;
