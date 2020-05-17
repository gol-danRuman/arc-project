import React, { Fragment, useState } from "react";
import "./introduction.scss";
import TeamPage from "../team/team"

const IntroPage = (props: any) => {

    const renderInfo = () => {
        return (
            <div className="introduction-content">
                <div className="title">
                    Introduction
                </div>
                <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed.
                </div>
                <div className="mission">
                    Mission & Vision
                </div>
                <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, changed.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {renderInfo()}
        </Fragment>
    )
}

export default IntroPage;