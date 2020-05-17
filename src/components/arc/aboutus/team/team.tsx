import React, { Fragment, useState } from "react";
import "./team.scss";

const TeamPage = (props: any) => {

      const renderInfo = () => {
        return (
                <div className="team-content">
                    <div className="title">
                        <img src="image/rsz_13.jpg"/>
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

export default TeamPage;