import React, { Fragment } from "react";
import "./contact.scss";
const renderAboutMenuList = () => {
    return (

        <div className="menu-item">
            <div >
                CONTACT
            </div>
        </div>

    )
}

const ContactPage = () => {
    return (
        <Fragment>
            {renderAboutMenuList()}
            <div className="left-page">
                contact page
            </div>
            <div className="right-page">
                maps
            </div>
        </Fragment>
    )
}

export default ContactPage;