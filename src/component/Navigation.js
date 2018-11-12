import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul className="nav nav-pills">
    <li className="nav-item">
      <NavLink
        exact={true}
        to={"/"}
        activeClassName="active"
        className="nav-link"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={"/AddUser"} activeClassName="active" className="nav-link">
        Add User
      </NavLink>
    </li>
    <li>
      <NavLink to={"/ShowUsers"} activeClassName="active" className="nav-link">
        UserList
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
