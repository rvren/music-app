import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Albums from "./containers/Albums";
import Favourite from "./containers/Favourites";
import SideNav from './components/Sidenav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="Parent-container">
        <SideNav />
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route path="/favourites" component={Favourite} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
