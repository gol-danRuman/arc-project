import React, { useState, Fragment } from "react";
import {Link} from 'react-router-dom';

const Layout = () => {
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

    return (
        <Fragment>
            {renderCompanyLogo()}
            {renderNextCompany()}
        </Fragment>
    )
}

export default Layout;