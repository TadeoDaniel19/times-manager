import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const HamburgerMenu = (props) => {
  return (
    <Menu {...props}>
      <Link to="/times" style={{ paddingLeft: '5px' }}>
        Asistencia
      </Link>
      <Link to="/log-in" style={{ paddingLeft: '5px' }}>
        Cerrar sesión
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;