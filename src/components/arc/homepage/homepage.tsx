import React,{ useState} from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ArcHomePageSlider from "./slider/image_video_slider";
import "./homepage.scss";

type ArcHomePageProps = {
    company: any;
    activeIndex: string;
};

type ArcHomePageState = {
    activeIndex: string;
    activated: string;
}

export default class ArcHomePage extends React.Component<ArcHomePageProps, ArcHomePageState> {

    constructor(props: ArcHomePageProps){
        super(props);
        this.state = {
            activeIndex: this.props.activeIndex,
            activated: ''   
        }
        this.renderCompanyLogo = this.renderCompanyLogo.bind(this);
    }

    renderCompanyLogo(){
        return(
            <div className="company-logo">
                <img alt="MDB React Logo" className="img-fluid" src={process.env.PUBLIC_URL + '/image/arc.svg'}/>
            </div>
        )
    }

    renderNextCompany(){
        return(
            <div className="toogle-company">
                <Link to={"/eng"}>
                    Go To BEAM
                </Link>
            </div>
        )
    }

    render(){
        return (
            <React.Fragment>
              <div className="full">
                <div className="full-content">
                    {this.renderCompanyLogo()}
                    {this.renderNextCompany()}  
                </div>
                <div className="full-slider">
                    <ArcHomePageSlider/>
                </div>
              </div>
            </React.Fragment>
          )
    }
        
    
  
}

