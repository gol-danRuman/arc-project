import React, { Fragment, useState } from "react";
import Layout from '../../common/layout';
import TeamPage from "./team/team";
import IntroPage from "./intro/introduction";
import Footer from "../../footer/footer";

const AboutUs = (props:any) => {
    const [active, setActive] = useState(true);
    const [activeTab, setActiveTab] = useState('intro');

    const renderAboutMenuList = () => {
        return (

            <div className="menu-item">
                <div onClick={()=> setActiveTab('intro')}>
                    Introduction
                </div>
                <div onClick={()=> setActiveTab('team')}>
                    Team
                </div>
                <div >
                    ABOUT
                </div>
            </div>

        )
    }

    const renderSwitch = (activeTab: string ) => {
        switch(activeTab){
            case 'team':
                return <TeamPage/>
            case 'intro':
                return <IntroPage/>
            default:
                return 'No match';
        }
    }

    return (
        <Fragment>
            <Layout/>
                {renderAboutMenuList()}
                {
                active ? renderSwitch(activeTab) : ""
            }
                
            <Footer/>    
        </Fragment>
    )

}

export default AboutUs;