import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

import { Person } from '@mui/icons-material';

const Login = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 320, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#00000' }
  const btnstyle = { margin: '8px 0' }
  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><Person /></Avatar>
          <h2>Inicio de sesión</h2>
        </Grid>
        <div style={{ padding: '10px' }}>
          <TextField label='Usuario' placeholder='Ingresa un usuario' fullWidth required />
        </div>
        <div style={{ padding: '10px' }}>
          <TextField label='Contraseña' placeholder='Ingresa una contraseña' type='password' fullWidth required />
        </div>
        <div style={{ paddingTop: '15px'}}>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Iniciar sesión</Button>
        </div>
        <Typography style={{ paddingTop: '10px' }}> ¿No tienes una cuenta?
          <Link to="/sign-up" className="text-blue-500" style={{ paddingLeft: '5px' }}>
            Registrate
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
