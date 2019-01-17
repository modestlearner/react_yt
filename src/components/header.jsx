import React, { Component } from "react";
import "../components/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "nuka-carousel";
import Images from "./images";
import {Link} from 'react-router-dom'

const slideImages = [
  "http://intericsdc.com/img/work/dmi/dmi-main.jpg",
  "https://dminc.com/wp-content/uploads/2014/12/NOIDA-3.jpg",
  "https://dminc.com/wp-content/uploads/2017/09/DMI_Logo.png"
];
const properties = {
  autoplay: true,
  wrapAround: true
};

class Header extends Component {
  state = {
    im: [
      {
        id: 0,
        val: "http://intericsdc.com/img/work/dmi/dmi-main.jpg",
        info: "dmi noida"
      },
      {
        id: 1,
        val: "https://dminc.com/wp-content/uploads/2014/12/NOIDA-3.jpg",
        info: "dmi pune"
      },
      {
        id: 2,
        val: "https://dminc.com/wp-content/uploads/2017/09/DMI_Logo.png",
        info: "dmi chennai"
      }
    ],
    urlf: null,
    slider: (
      <Carousel {...properties}>
        {slideImages.map((each, index) => (
          <img key={index} src={each} />
        ))}
      </Carousel>
    )
  };
 
  handle = url => {
    if (url) {
      let i = url;
      this.setState({ urlf: i });
      this.setState({ slider: null });
      let inf;
      inf = this.state.im.filter(i => url === i.val);
      console.log(inf);
    }
  };
  handleClass = url => {
    let classn;
    if (url != null) {
      classn = "box";
      return classn;
    } else {
      classn = "boxhidden";
      return classn;
    }
  };

  render() {
    let c = this.handleClass(this.state.urlf);
    console.log(this.state.person);
    return (
      <div class="outer">
      <Link to ='/users'><button class = 'btnn btn btn-primary'>users</button></Link>
        <div class="header">
          {this.state.slider}
          <img className={c} src={this.state.urlf} />
          {this.state.im.map(i => (
            <Images key={i.id} val={i.val} inf={i.info} onLoad={this.handle} />
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
