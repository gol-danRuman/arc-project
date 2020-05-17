import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import TitlePage  from "./title-page/titlePage";
import ArcHomePage from "./arc/homepage/homepage";
import AboutUs from "./arc/aboutus/about";
import ContactPage from './arc/contact/contact';


class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route path='/' exact={true} component={TitlePage} />
          <Route path='/arc' exact={true} component={ArcHomePage} />
          <Route path='/eng' exact={true} component={ArcHomePage} />
          <Route path='/about' exact={true} component={AboutUs} />
          <Route path='/contact' exact={true} component={ContactPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
