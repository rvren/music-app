import React from "react";
import Albums from "./Albums";
import Favourite from "./Favourites";
import SideNav from "../components/Sidenav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
return (
    <Router>
      <div className="Parent-container">
        <SideNav />
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route path="/favourites" component={Favourite} />
        </Switch>
      </div>
    </Router>
    )
}