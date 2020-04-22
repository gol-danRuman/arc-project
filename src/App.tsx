import React from 'react';
import './App.css';
import  WithSplashScreen  from "./components/hoc/withSplashScreen";
import TitlePage from "./components/title-page/titlePage";
import { Switch, Route } from 'react-router-dom';
import Routes from "./components/Routes";


class App extends React.Component<any> {


  render() {
    return (
      <main id="content" className="p-5">
          <Routes />
      </main>
    );
  }
      
  
}

export default (App);

