import { MobileDatePicker } from '@mui/lab';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useState } from 'react'
import HamburgerMenu from '../menu'
import ModalDetail from '../modaDetail';
import "./styles.css";
import { Add } from '@mui/icons-material';
import { format } from 'date-fns';
import ScoreTable from '../scoreTable';

const Scores = () => {
  const user = localStorage.getItem('user');
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(null);
  const [text, setText] = React.useState(null);
  const [score, setScore] = React.useState(null);
  const [subject, setSubject] = React.useState(null);
  const [rows, setRows] = useState([
    { name: 'Maxwell Jacob Friedman', subject: 'Programación', score: 7.65, date: '12/06/2021', },
    { name: 'Daniel Bryan', subject: 'Ciencias', score: 8.50, date: '12/06/2021', },
    { name: 'Tadeo Daniel', subject: 'Español', score: 6.65, date: '12/06/2021', },
    { name: 'Seth Rollins', subject: 'Educación fisica', score: 4.65, date: '12/06/2021', },
    { name: 'Roman Reings', subject: 'Programación', score: 5.65, date: '12/06/2021', },
  ])
  const columns = [
    'Avatar',
    'Nombre',
    'Materia',
    'Calificación',
    'Estado',
    'Fecha de registro',
  ]

  const handleSubmit = () => {
    setRows([
      ...rows,
      { name: text, date: format(new Date(value), 'dd/MM/yyyy'), subject, score, },
    ])
    setText(null);
    setValue(null);
    setOpen(false);
  }
  return (
    <div id="Dash">
      <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"Dash"} />
      <div id="page-wrap">
        <div className="p-12 flex flex-row justify-end">
          {
            user === 'Veronica Pavana' && (
              <Button
                style={{ backgroundColor: '#F99D07', fontWeight: 'bold' }}
                variant="contained"
                startIcon={<Add />}
                onClick={() => setOpen(!open)}
              >
                Añadir Calificacion
              </Button>
            )
          }
        </div>
        <div className="w-full p-12">
          <ScoreTable columns={columns} rows={rows} />
        </div>
      </div>
      <ModalDetail
        open={open}
        maxWidth="sm"
        title="Añadir una calificación"
        handleClose={() => setOpen(false)}
        scroll="paper">
        <div className="w-full space-y-4 ">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="p-5 flex flex-col space-y-5 space-x-5">
              <TextField
                label='Nombre'
                placeholder='Ingresa un nombre'
                type='text'
                fullWidth
                required
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }} />
              <TextField
                label='Calificación'
                placeholder='Ingresa una calificación'
                type='number'
                fullWidth
                required
                value={score}
                onChange={(e) => {
                  setScore(e.target.value);
                }} />
              <TextField
                label='Materia'
                placeholder='Ingresa una Materia'
                type='text'
                fullWidth
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }} />
              <MobileDatePicker
                label="Selecciona una fecha*"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </LocalizationProvider>
          <div className="flex justify-center p-3">
            <Button disabled={value === null} onClick={handleSubmit} variant="contained">Guardar</Button>
          </div>
        </div>
      </ModalDetail>
    </div>
  )
}

export default Scores;