import React from 'react';
import './App.css';
import  WithSplashScreen  from "./components/hoc/withSplashScreen";
import TitlePage from "./components/title-page/titlePage";
import { Switch, Route } from 'react-router-dom';
import Routes from "./components/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component<any> {


  render() {
    return (
      <main id="content">

          <Routes />
      </main>
    );
  }
      
  
}

export default (App);

