import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Default from "./containers/default";


import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/products">
            <Default>
              <Products />
            </Default>
          </Route>
          <Route path="/">
            <Default>
              <Dashboard />
            </Default>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}