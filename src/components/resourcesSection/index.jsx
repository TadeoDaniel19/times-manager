import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import HamburgerMenu from '../menu'
import ModalDetail from '../modaDetail';
import "./styles.css";
import { Add } from '@mui/icons-material';
import AlignItemsList from '../resources';

const ResourcesPage = () => {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem('user');
  const [text, setText] = React.useState('');
  const [linkText, setLinkText] = React.useState('');
  const [content, setContent] = useState([
    { name: "Veronica Pavana", title: "Video de matematicas", link: "https://www.youtube.com/watch?v=lWQ69WX7-hA" },
    { name: "Veronica Pavana", title: "Video de ingles", link: "https://www.youtube.com/watch?v=AqesL138vMA" },
    { name: "Veronica Pavana", title: "Video de programacion", link: "https://www.youtube.com/watch?v=50RbVujPPGs" },
    { name: "Veronica Pavana", title: "Video de redes", link: "https://www.youtube.com/watch?v=u2Ms34GE14U" },
    { name: "Veronica Pavana", title: "Video de ciencias", link: "https://www.youtube.com/watch?v=jGehuhFhtnE" },
  ]);

  const handleSubmit = () => {
    setContent([
      ...content,
      { title: text, link: linkText, name: "Verónica Pavana" },
    ])
    setText('');
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
                Añadir Recurso
              </Button>
            )
          }
        </div>
        <div className="w-full p-12  flex justify-center">
          <AlignItemsList content={content} />
        </div>
      </div>
      <ModalDetail
        open={open}
        maxWidth="sm"
        title="Añadir una asistencia"
        handleClose={() => setOpen(false)}
        scroll="paper">
        <div className="w-full space-y-4 ">
          <div className="p-5 flex flex-col space-y-5">
            <TextField
              label='Titulo'
              placeholder='Ingresa un titulo para el recurso*'
              type='text'
              fullWidth
              required
              value={text}
              style={{
                width: '225px',
              }}
              onChange={(e) => {
                setText(e.target.value);
              }} />
            <TextField
              label='Recurso'
              placeholder='Ingresa un link del recurso*'
              type='text'
              fullWidth
              required
              value={linkText}
              style={{
                width: '225px',
              }}
              onChange={(e) => {
                setLinkText(e.target.value);
              }} />
          </div>
          <div className="flex justify-center p-3">
            <Button disabled={text === '' || linkText === ''} onClick={handleSubmit} variant="contained">Guardar</Button>
          </div>
        </div>
      </ModalDetail>
    </div>
  )
}

export default ResourcesPage;