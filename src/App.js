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

          
          <Route path="/dashboard">
            <Default title="Dashboard">
              <Dashboard />
            </Default>
          </Route>

          <Route path="/">
            <Default title="Products">
              <Products />
            </Default>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}