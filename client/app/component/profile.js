import React from 'react';
import { Link } from 'react-router';

const Profile = React.createClass({
  eventHandler(e, val) {
    $(`#${e}`).hide(1000);
    this.props.deleteRecipe(e);
    console.log('slayyyyyyyyyy ' + e)
  },
  renderPhoto(res, i) {
    return (
      <div >
        <div className="display-container off" id={res.id}>
            <img className="" src={res.image}/>
            <section className=" display-hover display-bottommiddle grid-sect">
              <div className="text-white grid-desc">
                <p className="left-align grid-para"><span className="text-blue grid-span">#<b>{res.user}</b></span>
                <i>{res.caption}</i><br/>
                <span className="text-blue"><i className="fa fa-heart"></i> {res.likes}  /
                <i className="fa fa-comment-o"></i> {res.comments}</span></p>
              </div>
            </section>
            <div className="display-hover">
              <section className="rightalign2">
                <span className="fa-stack fa-lg" onClick={ this.props.editRecipe.bind(null, res.id)}>
                  <i className="fa fa-circle fa-stack-2x fa-w"></i>
                  <i className="fa fa-edit fa-stack-1x fa-inverse text-white"></i>
                </span>
              </section>

              <section className="rightalign3">
                <span className="fa-stack fa-lg center" onClick={this.eventHandler.bind(null, res.id)}>
                  <i className="fa fa-circle fa-stack-2x fa-w"></i>
                  <i className="fa fa-trash-o fa-stack-1x fa-inverse text-white"></i>
                </span>
              </section>
            </div>
        </div>
      </div>
    )
  },
  renderPhoto2(res, i) {
    return (
        <div className=" display-container off" id={res.id}>
            <img className="" src={res.image}/>
            <section className=" display-hover display-bottommiddle grid-sect">
              <div className="text-white grid-desc">
                <p className="left-align grid-para"><span className="text-blue grid-span">#<b>{res.user}</b></span>
                <i>{res.caption}</i><br/>
                <span className="text-blue"><i className="fa fa-heart"></i> {res.likes}  /
                <i className="fa fa-comment-o"></i> {res.comments}</span></p>
              </div>
            </section>
          <div className="display-hover">
            <section className="rightalign2">
              <span className="fa-stack fa-lg" onClick={ this.props.editRecipe.bind(null, res.id)}>
                <i className="fa fa-circle fa-stack-2x fa-w"></i>
                <i className="fa fa-edit fa-stack-1x fa-inverse text-white"></i>
              </span>
            </section>

            <section className="rightalign3">
              <span className="fa-stack fa-lg center" onClick={this.eventHandler.bind(null, res.id)}>
                <i className="fa fa-circle fa-stack-2x fa-w"></i>
                <i className="fa fa-trash-o fa-stack-1x fa-inverse text-white"></i>
              </span>
            </section>
          </div>
        </div>
    )
  },
  render() {
    const profile = this.props.profile
    let base = Math.ceil(profile.length / 2)
    const set1 = profile.slice(0,base)
    const set2 = profile.slice(base ,base * 2)
    return (
      <div>
        <nav className="sidebar bar-block small hide-small center">
          {/* <img src="/images/img6.jpeg" style={{height: 50}}/> */}
          <a href="./index.html" className="bar-item padding-large hover-black">
            <i className="fa fa-home xxlarge"></i>
            <p>HOME</p>
          </a>
          <a href="#about" className="bar-item hover-black tablink">
            <i className="fa fa-user xxlarge"></i>
            <p>PROFILE</p>
          </a>
          <a href="#photos" className="bar-item tablink hover-black" >
            <i className="fa fa-eye xxlarge"></i>
            <p>PHOTOS</p>
          </a>
          <a href="#photos" className="bar-item tablink hover-black" >
            <i className="fa fa-heart xxlarge"></i>
            <p>FAVORITES</p>
          </a>
          <a href="#contact" className="bar-item hover-black tablink">
            <i className="fa fa-envelope fa-3x" ></i>
            <p>CONTACT</p>
          </a>
        </nav>

        <div className="padding-large" id="main">


          <div className="content tab" id="photos">
            <hr className="hr"/>

            <div className="padding-16 center">
              <div className="bar border">
                <a href="#" className="bar-item button" onclick="max()" style={{textDecoration: 'none'}}>Greyscale</a>
                <a href="#" className="bar-item button light-grey">Sepia</a>
                <a href="#" className="bar-item button" onclick="min()" style={{textDecoration: 'none'}}>Greyscale-min</a>

              </div>
            </div>
            <div className="row" id="myGrid" style={{marginBottom: 128}}>

              <div className="half">
                {set1.map(this.renderPhoto)}
              </div>

              <div className="half">
                {set2.map(this.renderPhoto2)}
              </div>

            </div>

          </div>


          <div className="content justify text-grey padding-64 tab" id="about">
            <h2 className="text-dark-grey">About Me</h2>
            <hr  className="opacity hr"/>
            <p className="line">Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="padding-16 text-light-grey">My Skills</h3>
            <p className="wide">Photography</p>
            <div className="white">
              <div className="dark-grey pipe" ></div>
            </div>
            <p className="wide">Web Design</p>
            <div className="white">
              <div className="dark-grey pipe" ></div>
            </div>
            <p className="wide">Photoshop</p>
            <div className="white">
              <div className="dark-grey pipe"></div>
            </div><br/>

            <div className="row center padding-16 section light-grey">
              <div className="col-sm-3 section">
                <span className="xlarge">11+</span><br/>
                Favorites
              </div>
              <div className="col-sm-3 section">
                <span className="xlarge">55+</span><br/>
                Projects Done
              </div>
              <div className="col-sm-3 section">
                <span className="xlarge">89+</span><br/>
                Happy Clients
              </div>
              <div className="col-sm-3 section">
                <span className="xlarge">150+</span><br/>
                Followers
              </div>
            </div>

            <button className="button dark-grey padding-large section">
              <i className=""></i> FOLLOW +
            </button>


            <h3 className="padding-24 text-light-grey">Referees</h3>
            <img src="/mages/bandmember.jpg" alt="Avatar" className="left circle margin-right ref" />
            <p><span className="large margin-right">Chris Fox.</span> <br/>CEO at Mighty Schools.</p>
            <p>Jane Doe saved us from a web disaster.</p><br/>

            <img src="/mages/avatar_g2.jpg" alt="Avatar" className="left circle margin-right ref"/>
            <p><span className="large margin-right">Rebecca Flex.</span><br/> CEO at Company.</p>
            <p>No one is better than Jane Doe.</p>

            <button className="button right wide dark-grey padding-large section">
              <i className=""></i> EDIT +
            </button>
          </div>

          <div className="padding-64 content text-grey tab" id="contact">

            <h2 className="text-dark-grey">Contact Me</h2>
            <hr  className="opacity hr"/>

            <div className="section">
              <p><i className="fa fa-map-marker fa-fw text-dark-grey xxlarge margin-right"></i> Chicago, US</p>
              <p><i className="fa fa-phone fa-fw text-dark-grey xxlarge margin-right"></i> Phone: +00 151515</p>
              <p><i className="fa fa-envelope fa-fw text-dark-grey xxlarge margin-right"> </i> Email: mail@mail.com</p>
            </div><br/>
            <p>Lets get in touch. Send me a message:</p>

            <form action="/action_page.php" target="_blank">
              <p><input className="input padding-16" type="text" placeholder="Name" required name="Name"/></p>
              <p><input className="input padding-16" type="text" placeholder="Email" required name="Email"/></p>
              <p><input className="input padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
              <p><input className="input padding-16" type="text" placeholder="Message" required name="Message"/></p>
              <p>
                <button className="button light-grey padding-large" type="submit">
                  <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </p>
            </form>
          </div>



        </div>

      </div>
    )
  }
});

export default Profile;
