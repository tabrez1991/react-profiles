import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

import "./styles.css";

const App = () => {
  const Redirectx = ({ history }) => {
    history.push("/home");
    return <Home />;
  };
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Redirectx} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route component={Error} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
