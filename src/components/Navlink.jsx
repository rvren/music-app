import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ ...props }) => {
  const location = useLocation();
  var isActive = location.pathname === props.to;
  var className = isActive ? "Navigation-menu-active" : "";

  return (
    <Link className={className} {...props}>
      {props.children}
    </Link>
  );
};

export default NavLink;
