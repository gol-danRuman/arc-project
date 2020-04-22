import React, { Component, useState, useEffect } from 'react';
import "./titlePage.scss";
import { Link } from 'react-router-dom';


function ArchitecturePage() {
    const [arcActive, setArcActive] = useState('');
    function activateArc(status: string) {
        setArcActive(status);
    }
    const [engActive, setEngActive] = useState('');
    function activateEng(status: string) {
        setEngActive(status);
    }
    return (
        <div className="title-page">
            <Link to="/arc">
                <div className={`architecture-page ${arcActive}`}
                    onMouseEnter={() => { activateArc('active') }}
                    onMouseLeave={() => { activateArc('') }}
                    onClick={() => { return <Link to="/arc" /> }}
                >
                    {
                        arcActive
                            ? <img src={process.env.PUBLIC_URL + '/image/arc.svg'}></img>
                            : <text>Architecture</text>
                    }
                </div>
            </Link>
            <div className="divider">

            </div>

            <Link to="/eng">
                <div className={`engineering-page ${engActive}`}
                    onMouseEnter={() => { activateEng('active') }}
                    onMouseLeave={() => { activateEng('') }}
                >
                    {
                        engActive
                            ? <img src={process.env.PUBLIC_URL + '/image/arc.svg'}></img>
                            : <text>Engineering</text>
                    }
                </div>
            </Link>
        </div>
    )
}

export default function TiltlePage() {
    return ArchitecturePage();
}

