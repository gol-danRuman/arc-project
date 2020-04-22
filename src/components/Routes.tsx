import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import TitlePage  from "./title-page/titlePage";
import ArcHomePage from "./arc/homepage/homepage";


class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route path='/' exact={true} component={TitlePage} />
          <Route path='/arc' exact={true} component={ArcHomePage} />
          <Route path='/eng' exact={true} component={ArcHomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
