import React, { Component } from "react";
import "../components/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'nuka-carousel';
const slideImages = [
  "https://lorempixel.com/250/250/nature/1",
  "https://lorempixel.com/250/250/nature/2",
  "https://lorempixel.com/250/250/nature/3",
  "https://lorempixel.com/250/250/nature/4"
];
const properties = {
    autoplay:true,
    wrapAround:true
};

class Header extends Component {
  state = {};

  render() {
    return (
      <div class="outer">
        <div class = 'header'>
          
        <Carousel {...properties}>
          {
              slideImages.map((each, index)=> <img key={index}src={each} class = 'rsize' />)
          }
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Header;
