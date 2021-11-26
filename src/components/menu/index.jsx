import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const HamburgerMenu = (props) => {
  return (
    <Menu {...props}>
      <Link to="/home" style={{ paddingLeft: '5px' }}>
        Home
      </Link>
      <Link to="/times" style={{ paddingLeft: '5px' }}>
        Asistencia
      </Link>
      <Link to="/scores" style={{ paddingLeft: '5px' }}>
        Calificaciones
      </Link>
      <Link to="/resources" style={{ paddingLeft: '5px' }}>
        Recursos
      </Link>
      <Link to="/comments" style={{ paddingLeft: '5px' }}>
        Comentarios
      </Link>
      <Link to="/log-in" style={{ paddingLeft: '5px' }}>
        Cerrar sesión
      </Link>

    </Menu>
  );
};

export default HamburgerMenu;