import React,{ useState} from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import YoutubePlayer from "../player/youtube_player";
import CarouselSlider from 'react-carousel-slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import Slider from '@farbenmeer/react-spring-slider';
import "./slider.scss"
import YouTubePlayer from 'react-player/lib/players/YouTube';


// type ArcHomePageProps = {
//     company: any;
//     activeIndex: string;
// };

// type ArcHomePageState = {
//     activeIndex: string;
//     activated: string;
// }

export default class ArcHomePageSlider extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {
            activeIndex: this.props.activeIndex,
            activated: '',
            play: true   
        }
        this._onPause = this._onPause.bind(this);
        this._onPlay = this._onPlay.bind(this);
        this._toogleFullScreen = this._toogleFullScreen.bind(this);
    }
    _toogleFullScreen(event: any){
      const element = document.getElementById('y-player');
      if (element !== null && element.requestFullscreen) {
          element.requestFullscreen();
      }
    }
  
    _onPlay(event: any){
        this.setState({
            play: true
        })
    }
  
    _onPause(event: any){
        this.setState({
            play: false
        })
    }
   
    _onReady(event: any) {
      event.target.pauseVideo();
    }

    renderVideo(url: string){
      return <div>
            <div className="player-ours"
                 style={{pointerEvents: "none"}}
            >
                        
            <YouTubePlayer
                url={url}
                playing={this.state.play}
                controls={false}
                className="y-player"
                id="y-player"
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
                    <button className="play" onClick={this._onPlay}>Play</button>
                    <button className="pause" onClick={this._onPause}>Pause</button>
                </div>
                <div className="our-player-fullscreen">
                  <button className="fullScreen" onClick={this._toogleFullScreen}>FullScreen</button>
                </div>
            </div>
            
            
            </div>

    }

    renderImages(src: string){
      return <div>
        <img src={src}/>
      </div>
    }



    render() {
        const image_video_data = [

          {
            "src" : "https://www.youtube.com/embed/ftEzdVJWdDA",
            "tag": "video"
          },
          {
            "src" : "http://placekitten.com/g/400/200",
            "tag": "image"
          },
          {
            "src" : "http://placekitten.com/g/400/200",
            "tag": "image"
          },
          {
            "src" : "http://placekitten.com/g/400/200",
            "tag": "image"
          },
        ]

        const data = image_video_data.map((all_data, index)=> {
          return(
            <div className="item" key={index}>
              {
                all_data.tag === 'video' ? 
                  this.renderVideo(all_data.src)
                : 
                  this.renderImages(all_data.src)
              }  
            </div>
            
            
          )
        })
        

        return (
          <div className="container">
              {data}
          </div>
        );
    }
    
  
}

