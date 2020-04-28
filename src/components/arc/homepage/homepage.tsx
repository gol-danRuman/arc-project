import React, { useState, Fragment } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ArcHomePageSlider from "./slider/image_video_slider";
// import { slide as Menu } from 'react-burger-menu';

import Menu from "../menu/menu";

import "./homepage.scss";

type ArcHomePageProps = {
    company: any;
    activeIndex: string;
};

type ArcHomePageState = {
    activeIndex: string;
    activated: string;
}

const ArcHomePage = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [activated, setActivated] = useState('');


    const renderCompanyLogo = () => {
        return (
            <div className="company-logo" >
                <Link to="/arc">
                    <img alt="MDB React Logo" className="img-fluid" src={process.env.PUBLIC_URL + '/image/arc.svg'} />
                </Link>
            </div>
        )
    }

    const renderNextCompany = () => {
        return (
            <div className="toogle-company">
                <Link to={"/eng"}>
                    <div className="toogle-bar"></div>
                    <div className="toogle-text">
                        Go to BEAM
                    </div>
                </Link>
            </div>
        )
    }

    const renderInfo = () => {
        return (
          <div className="company-content">
            <div className="title">
              Project Name
                        </div>
            <div className="description">
              Project Description
                        </div>
    
          </div>
        )
      }
      const image_video_data = [

        {
          "src": "http://placekitten.com/g/400/200",
          "tag": "image"
        },
        {
          "src": "http://placekitten.com/g/400/200",
          "tag": "image"
        },
        {
          "src": "https://youtu.be/k2qgadSvNyU",
          "tag": "video"
        },
        {
          "src": "http://placekitten.com/g/400/200",
          "tag": "image"
        },
      ]

    return (
        <Fragment>
            <div className="full">
                <div className="full-content">
                    {renderCompanyLogo()}
                    {renderNextCompany()}
                    {/* {renderInfo()} */}
                    <div className="menu-btn">
                        <Menu image_video_data={image_video_data}/>
                    </div>
                </div>
                {/* <div className="full-slider">
                    <ArcHomePageSlider image_video_data={image_video_data}/>
                </div> */}
            </div>
        </Fragment>
    )

}


export default ArcHomePage;
