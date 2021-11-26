import { ChildCare } from '@mui/icons-material';
import React from 'react'
import HamburgerMenu from '../menu'

import "./styles.css";

const Dashboard = () => {
  const user =  localStorage.getItem('user');
  return (
    <div id="Dash">
      <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"Dash"} />
      <div id="page-wrap">
        <div className="flex h-screen space-y-4 bg-yellow-500">
          <div className="m-auto space-y-4">
            <span className="text-4xl block text-black">Bienvenido</span>
            <span className="text-xl block  text-black">Elige una opcion del menú</span>
            <span className="text-xl block  text-black">{`Usuario: ${user} ( ${user === 'Veronica Pavana' ? 'Profesor' : 'Alumno'})` }</span>
            <ChildCare style={{ width: 80, height: 80 }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;