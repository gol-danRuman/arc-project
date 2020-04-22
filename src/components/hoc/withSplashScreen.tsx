import React, { Component, useState, useEffect } from 'react';
import './splash-screen.css';

function LoadingMessage() {
  return (
    <div className="splash-screen">
      <img className="splash-image" src={process.env.PUBLIC_URL + '/image/arc.svg'} />
      <div className="loading-dot">.</div>
    </div>
  );
}

export default function WithSplashScreen(WrappedComponent: any) {

  const [loading, setLoading] = useState(true);


  useEffect(
    () => {
      let timer1 = setTimeout(() => setLoading(false), 4000)

      // this will clear Timeout when component unmont like in willComponentUnmount
      return () => {
        clearTimeout(timer1)
      }
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  )
  const MainPageSplashed : any = WithSplashScreen(WrappedComponent);

  if (loading) return LoadingMessage();
  return MainPageSplashed;

}