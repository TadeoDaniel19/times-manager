import React from 'react'
import HamburgerMenu from '../menu'

import "./styles.css";

const Dashboard = () => {
  return (
    <div id="Dash">
      <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"Dash"} />
      <div id="page-wrap">
        <div className="flex h-screen space-y-4 bg-yellow-500">
          <div className="m-auto space-y-4">
            <span className="text-4xl block text-blue-500">Bienvenido</span>
            <span className="text-xl block  text-blue-500">Elige una opcion del menú</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;