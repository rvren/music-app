import React, { Suspense, lazy } from "react";
import SideNav from "../components/Sidenav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CardPlaceholder = lazy(() => import('../components/Cards/CardPlaceholder'));
const Albums = lazy(() => import("./Albums"));
const Favourite = lazy(() => import("./Favourites"));

export default function App() {
return (
  <Router>
    <Suspense fallback={""}>
      <div className="Parent-container">
        <SideNav />
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route path="/favourites" component={Favourite} />
        </Switch>
      </div>
    </Suspense>
  </Router>
);
}