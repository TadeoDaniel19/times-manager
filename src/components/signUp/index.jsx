import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { PersonAdd } from '@mui/icons-material';

const SignIn = () => {

  const paperStyle = { padding: 20, height: '80vh', width: 320, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><PersonAdd /></Avatar>
          <h2>Crear una cuenta</h2>
        </Grid>
        <div style={{ padding: '10px' }}>
          <TextField label='Nombre(s)' placeholder='Ingresa un nombre' fullWidth required />
        </div>
        <div style={{ padding: '10px' }}>
          <TextField label='Apellidos' placeholder='Ingresa un apellido' fullWidth required />
        </div>
        <div style={{ padding: '10px' }}>
          <TextField label='Usuario' placeholder='Ingresa un usuario' fullWidth required />
        </div>
        <div style={{ padding: '10px' }}>
          <TextField label='Contraseña' placeholder='Ingresa una contraseña' type='password' fullWidth required />
        </div>
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Crear usuario</Button>
        <Typography style={{ paddingTop: '10px'}}> ¿Ya tienes una cuenta?
          <Link className="text-blue-500" to="/log-in" style={{ paddingLeft: '5px' }}>
            Inicia sesión
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default SignIn;