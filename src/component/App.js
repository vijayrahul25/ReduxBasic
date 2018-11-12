import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import AddUser from "../container/AddUser.js";
import ShowUsers from "../container/ShowUsers.js";

const App = () => {
  return (
    <div className="container">
      <div>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/AddUser" component={AddUser} />
        <Route exact path="/ShowUsers" component={ShowUsers} />
      </Switch>
    </div>
  );
};
export default App;
