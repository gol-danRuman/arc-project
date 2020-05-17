import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu';
import Layout from "../../common/layout";

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


    // const renderCompanyLogo = () => {
    //     return (
    //         <div className="company-logo" >
    //             <Link to="/arc">
    //                 <img alt="MDB React Logo" className="img-fluid" src={process.env.PUBLIC_URL + '/image/arc.svg'} />
    //             </Link>
    //         </div>
    //     )
    // }

    // const renderNextCompany = () => {
    //     return (
    //         <div className="toogle-company">
    //             <Link to={"/eng"}>
    //                 <div className="toogle-bar"></div>
    //                 <div className="toogle-text">
    //                     Go to BEAM
    //                 </div>
    //             </Link>
    //         </div>
    //     )
    // }

    const renderInfo = () => {
        return (
          <div className="company-content">
            <div className="title">
                Project Name
            </div>
            <div className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
          </div>
        )
      }
      const image_video_data = [

        {
          "src": "image/rsz_213.jpg",
          "tag": "image"
        },
        {
          "src": "image/rsz_rsz_13.jpg",
          "tag": "image"
        },
        {
          "src": "https://youtu.be/k2qgadSvNyU",
          "tag": "video"
        },
        {
          "src": "image/rsz_13.jpg",
          "tag": "image"
        },
      ]

    return (
        <Fragment>
            <div className="full">
                <div className="full-content">
                    <Layout></Layout>
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
