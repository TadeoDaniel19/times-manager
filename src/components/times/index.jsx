import { MobileDatePicker } from '@mui/lab';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useState } from 'react'
import HamburgerMenu from '../menu'
import ModalDetail from '../modaDetail';
import "./styles.css";
import { Add } from '@mui/icons-material';
import DataTable from '../tableList';
import { format } from 'date-fns';

const Times = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(null);
  const [text, setText] = React.useState(null);
  const [rows, setRows] = useState([
    { name: 'Juan Perez', date: '01/05/2021', },
    { name: 'Veronica pavava', date: '12/06/2021' },
    { name: 'Tadeo Daniel', date: '23/07/2021' },
    { name: 'Hector Daniel', date: '06/07/2021' },
    { name: 'Tadeo Daniel', date: '12/09/2021' },
  ])
  const columns = [
    'Avatar',
    'Nombre',
    'Fecha de registro',
    'Estado',
  ]

  const handleSubmit = () => {
    setRows([
      ...rows,
      { name: text, date: format(new Date(value), 'dd/MM/yyyy') },
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
          <Button
            style={{ backgroundColor: '#F99D07', fontWeight: 'bold'}}
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpen(!open)}
          >
            Añadir Asistencia
          </Button>
        </div>
        <div className="w-full p-12">
          <DataTable columns={columns} rows={rows} />
        </div>
      </div>
      <ModalDetail
        open={open}
        maxWidth="sm"
        title="Añadir una asistencia"
        handleClose={() => setOpen(false)}
        scroll="paper">
        <div className="w-full space-y-4 ">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="p-5 flex flex-col space-y-5">
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

export default Times;