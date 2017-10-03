import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  renderPhotos(photo){
    return (
      <div className="item">
        <img src={photo.image} alt="Chicago" className="img-show"/>
      </div>
    )
  },
  render() {
    const photos = this.props.gallery
    const photo1 = photos.splice(0,1)

    const res = photo1[0]

    return (
      <div className="container" style={{backgroundColor: 'black'}}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={res.image} alt="Los Angeles" className="img-show"/>
            </div>

            {photos.map(this.renderPhotos)}
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
});

export default Main;
