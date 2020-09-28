import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Main from "./Pages/Main/Main";
import Sub from "./Pages/Sub/Sub";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/sub" component={Sub} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
