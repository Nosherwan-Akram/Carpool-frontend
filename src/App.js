import { MainTemplate, UserTemplate } from "./templates";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user">
            <UserTemplate></UserTemplate>
          </Route>
          <Route path="/">
            <MainTemplate></MainTemplate>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
