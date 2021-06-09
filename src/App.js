import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Views/Home";

// import { SurveyPage } from "./Views/Survey";
import SurveyPage from "./Views/Survey";
import SurveyDone from "./Views/SurveyDone";
import logo from "./logo.png"

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img
                  src={logo}
                  alt="Italian Trulli"
                  height="30"
                  width="200"
                ></img>
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/survey">Survey</Link>
              </li>

              {/* <li>
                <Link to="/surveydone">Survey Ergebnis</Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/survey">
            <SurveyPage />
          </Route>

          {/* <Route path="/surveydone">
            <SurveyDone />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
