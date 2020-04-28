import React, { Fragment, useState } from "react";
import "./menu.scss";
import { slide as Menu } from 'react-burger-menu';
import Burger from 'react-css-burger';
import { Link } from "react-router-dom";
import ArcHomePageSlider from "../homepage/slider/image_video_slider";
import ContactPage from "../contact/contact";

const MenuBar = (props: any) => {
    const [active, setActive] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    const renderTopMenuList = () => {
        return(
            <div className="menu-item">
            <div onClick={()=> setActiveTab('about')}>
                ABOUT
            </div>
            <div onClick={()=> setActiveTab('contacts')}>
                CONTACTS
            </div>

            </div>
        )
    }

    const renderAboutMenuList = () => {
        return(

            <div className="menu-item">
            <div >
                INTRODUCTION
            </div>
            <div >
                TEAM
            </div>
            <div >
                ABOUT
            </div>
            </div>
            
        )
    }

    const renderSwitch = (activeTab: string ) => {
        switch(activeTab){
            case '':
                return renderTopMenuList() 
            case 'about':
                return renderAboutMenuList()
            case 'contacts':
                return <ContactPage/>
            default:
                return 'No match';
        }
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

    return (
        <Fragment>
            <div className="menu">
                <Burger
                    onClick={() => {setActive(!active); setActiveTab('');}}
                    active={active}
                />
            </div>
            <div >
                <div className="full-slider">
                    {
                        activeTab === '' 
                        ?<div className="root-content">
                        {renderInfo()}
                        <ArcHomePageSlider image_video_data={props.image_video_data}/>
                        </div>
                        : ""
                    }
                </div>
            {
                active ? renderSwitch(activeTab) : ""
            }
            </div>
        </Fragment>
    )
}

export default MenuBar;