import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
  // componentWillMount(){
  //   this.props.getRecipes()
  // },
  render() {
    return (
      <div className="">
        <div className="bgimg display-container animate-opacity text-white view">
          <img className="responsive" src="/images/img5.jpeg" alt=""/>
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
            <h3 className="wide hide-small">- WE TAKE THE TIME TOO -</h3>
            <p className="animate-left center wide hide-small bg-para">STAND & STARE</p>
            <button className="butt animate-bottom wide"><b>BE INSPIRED</b></button>
          </div>
          <section className="bg-overlay">
          </section>
        </div>

        <div className="container-fluid padding-large center padding-32">
          <h3 className="wide text-black">- CAPTURING MOMENTS AS THEY HAPPEN -</h3>
          <p className="padding-large line">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br/> industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="row padding-16">

            <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
              <div className="card-4 display-container" >
                <img src="/images/img4.jpeg" className="rw-image"/>
                <section className="display-hover rw-overlay">
                  <h4 className="caption">LIFESTYLE</h4>
                </section>
                <div className="white bk-cap">
                  <p className="wide"><b>LIFESTYLE</b></p>
                </div>
              </div>
            </div>


            <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
              <div className="card-4 display-container" >
                <img src="/images/img3.jpeg" className="rw-image"/>
                <section className="display-hover rw-overlay" >
                  <h4 className="caption">NATURE</h4>
                </section>
                <div className="white bk-cap">
                  <p className="wide"><b>NATURE</b></p>
                </div>
              </div>
            </div>

              <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
                <div className="card-4 display-container" >
                <Link to="/gallery/travel">
                  <img src="/images/travel.jpeg" className="rw-image"/>
                </Link>
                  <section className="display-hover rw-overlay" >
                    <h4 className="caption">TRAVEL</h4>
                  </section>
                  <div className="white bk-cap">
                  <Link to="/gallery/travel" onClick={this.props.getPhoto.bind(null, 'travel')}>
                    <p className="wide"><b> TRAVEL</b></p>
                    </Link>
                  </div>
                </div>
              </div>

            <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
              <div className="card-4 display-container" >
                <img src="/images/img6.jpeg" className="rw-image"/>
                <section className="display-hover rw-overlay" >
                  <h4 className="caption">FASHION</h4>
                </section>
                <div className="white bk-cap">
                  <p className="wide"><b>FASHION</b></p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
              <div className="card-4 display-container" >
                <img src="/images/img7.jpeg" className="rw-image"/>
                <section className="display-hover rw-overlay" >
                  <h4 className="caption">BUSINESS</h4>
                </section>
                <div className="white bk-cap">
                  <p className="wide"><b>BUSINESS</b></p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 col-md-12 col-lg-4 center padding-16">
              <div className="card-4 display-container" >
                <img src="/images/img1.jpeg" className="rw-image"/>
                <section className="display-hover rw-overlay" >
                  <h4 className="caption">WILD LIFE</h4>
                </section>
                <div className="white bk-cap">
                  <p className="wide"><b>WILD LIFE</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {this.props.recipe.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}
          recipe={this.props.recipe}/>)} */}
      </div>
    )
  }
});

export default PhotoGrid;
