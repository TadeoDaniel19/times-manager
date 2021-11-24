import React from 'react'
import HamburgerMenu from '../menu'

import "./styles.css";

const Dashboard = () => {
  return (
    <div id="Dash">
      <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"Dash"} />
      <div id="page-wrap">
        <div className="flex h-screen space-y-4">
          <div className="m-auto space-y-4">
            <span className="text-4xl block">Bienvenido</span>
            <span className="text-xl block">Elige una opcion del menú</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;