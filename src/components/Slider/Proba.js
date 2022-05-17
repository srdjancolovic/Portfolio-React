import React, { Component } from 'react';
import Slider from 'react-slick';

import classes from './Slider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiGulp } from 'react-icons/si';
import { DiBootstrap } from 'react-icons/di';

import { FaSass } from 'react-icons/fa';
import { SiGit } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { SiFigma } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    return (
      <div className={classes.slider}>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          className={classes.slider__wrapper}
        >
          <div className={classes.slider__icon}>
            <span style={{ color: '#ff6347' }}>
              <SiHtml5 />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#2196f3' }}>
              <SiCss3 />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#f0db4f' }}>
              <SiJavascript />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#00d8ff' }}>
              <SiReact />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#0769ad' }}>
              <SiJquery />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#563d7c' }}>
              <DiBootstrap />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#cc6699' }}>
              <FaSass />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#02d084' }}>
              <SiFigma />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#ff61f6' }}>
              <SiAdobexd />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span className={classes['slider__icon--responsive']}>
              <DiResponsive />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#e32e37' }}>
              <DiNpm />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#cf4547' }}>
              <SiGulp />
            </span>
          </div>
          <div className={classes.slider__icon}>
            <span style={{ color: '#ffff' }}>
              <SiGit />
            </span>
          </div>
        </Slider>
        <div className={classes.slider__buttons}>
          <button className={classes.slider__button} onClick={this.play}>
            <AiOutlinePlayCircle />
          </button>
          <button className={classes.slider__button} onClick={this.pause}>
            <AiOutlinePauseCircle />
          </button>
        </div>
      </div>
    );
  }
}
