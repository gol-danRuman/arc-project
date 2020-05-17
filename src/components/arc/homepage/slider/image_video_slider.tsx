import React, { useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import YoutubePlayer from "../player/youtube_player";
import CarouselSlider from 'react-carousel-slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import "./slider.scss"
import YouTubePlayer from 'react-player/lib/players/YouTube';

import Slider from "react-slick";
import Footer from "../../../footer/footer.jsx";

const ArcHomePageSlider = (props: any) => {

  const [activated, setActivated] = useState('');
  const [play, setPlay] = useState(true);
  const [activeIndex, setActivateIndex] = useState(0);

  const _toogleFullScreen = (event: any) => {
    const element = document.getElementById('y-player');
    if (element !== null && element.requestFullscreen) {
      element.requestFullscreen();
    }
  }

  const _onPlay = () => {
    setPlay(true);
  }

  const _onPause = () => {
    setPlay(false);
  }

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  }

  const _prev = (event: any) => {
    _onPause();
    setActivateIndex(activeIndex > 0 ? activeIndex - 1 : 0);
  }

  const _next = (data: any) => {
    _onPause();
    setActivateIndex(activeIndex < data.length ? activeIndex + 1 : data.length);
  }

  const renderVideo = (url: string) => {
    return <div>
      <div className="player-ours"
        style={{ pointerEvents: "none" }}
      >

        <YouTubePlayer
          url={url}
          playing={play}
          controls={false}
          className="y-player"
          id="y-player"
          height="70vh"
          width="60vw"
          youtubeConfig={{

            playerVars: {

              rel: 0,
              showinfo: 1,
              autohide: 1,
              modestbranding: 1,
              controls: 0,
              disablekb: 1,
              fs: 1,
            },
          }}
        />
      </div>
      <div className="our-player-button">
        <div className="our-player-play-pause">
          <button className="pause button pause" onClick={_onPause}></button>
          <button className="play button play" onClick={_onPlay}>&#9655;</button>
        </div>
        {/* <div className="our-player-fullscreen">
          <button className="fullScreen" onClick={_toogleFullScreen}>FullScreen</button>

        </div> */}
      </div>


    </div>

  }

  const renderImages = (src: string) => {
    return <div>
      <img src={src} />
    </div>
  }

  
  const data = props.image_video_data.map((all_data: any, index: any) => {
    const activeNumber = 0;
    const activeStatus = activeNumber === index ? 'active' : '';
    return (
      <div className={`item`} key={index}>
        {
          all_data.tag === 'video' ?
            renderVideo(all_data.src)
            :
            renderImages(all_data.src)
        }
      </div>


    )
  })

  const renderSliderButton = () => {
    return (
      <div className="slider-buttons">
        <button disabled={activeIndex === 0} className="prev" onClick={_prev}>
        &#8249;
         </button>
         <a className="number-text">{activeIndex + 1 + "/" + data.length}</a>
        <button disabled={activeIndex >= data.length - 1} className="next" onClick={() => _next(data)}>
        &#8250;
        </button>
        <Footer></Footer>
      </div>
    )
  }

  return (
    <div className="container">
      {/* {renderInfo()} */}
      {data[activeIndex]}
      {renderSliderButton()}

    </div>
  );


}

export default ArcHomePageSlider;

