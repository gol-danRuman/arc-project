import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import screenfull from 'screenfull'
import './youtube_player.scss';
 
export default class YoutubePlayer extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {
            play: true
        }
        this._onPause = this._onPause.bind(this);
        this._onPlay = this._onPlay.bind(this);
        this._toogleFullScreen = this._toogleFullScreen.bind(this);
    }

    

  render() {
    const url = this.props;
    return <div>
            <div className="player-ours"
                //  style={{pointerEvents: "none"}}
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

            <button className="play" onClick={this._onPlay}>Play</button>
            <button className="pause" onClick={this._onPause}>Pause</button>
            <button className="fullScreen" onClick={this._toogleFullScreen}>FullScreen</button>
            </div>
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
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}