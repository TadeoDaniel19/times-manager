import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useState } from 'react'
import HamburgerMenu from '../menu'
import ModalDetail from '../modaDetail';
import "./styles.css";
import { Add } from '@mui/icons-material';
import ImgAvatar from "../../assets/vero.jpeg"
import userPng from "../../assets/user.png"
import Comments from '../comments';

const CommentsPage = () => {
  const user =  localStorage.getItem('user');
  const [open, setOpen] = useState(false);
  const [text, setText] = React.useState('');
  const [content, setContent] = useState([
    {
      avatar: ImgAvatar,
      name: "Verónica Pavana",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis.",
      time: new Date("07/06/19"),
    },
    {
      avatar: ImgAvatar,
      name: "Verónica Pavana",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis.",
      time: new Date("11/12/20"),
    },
    {
      avatar: ImgAvatar,
      name: "Verónica Pavana",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis.",
      time: new Date("11/12/21"),
    },
    {
      avatar: ImgAvatar,
      name: "Verónica Pavana",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.Suspendisse congue vulputate lobortis.",
      time: new Date("11/15/21"),
    }

  ])
  const handleSubmit = () => {
    setContent([
      ...content,
      { content: text, time: new Date(), avatar: user === 'vero123' ? ImgAvatar : userPng , name: user === 'vero123' ? 'Verónica Pavana' : user },
    ])
    setText('');
    setOpen(false);
  }
  return (
    <div id="Dash">
      <HamburgerMenu pageWrapId={"page-wrap"} outerContainerId={"Dash"} />
      <div id="page-wrap">
        <div className="p-12 flex flex-row justify-end">
          <Button
            style={{ backgroundColor: '#F99D07', fontWeight: 'bold' }}
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpen(!open)}
          >
            Añadir comentario
          </Button>
        </div>
        <div className="w-full p-12  flex justify-end">
          <Comments content={content} />
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
              <textarea
                onChange={(e) => {
                  setText(e.target.value);
                }}
                className="focus:border-2 focus:border-orange-400 border-2 border-orange-200"
                style={{
                  width: '300px'
                }}
                placeholder="Añade un comentario" />
            </div>
          </LocalizationProvider>
          <div className="flex justify-center p-3">
            <Button disabled={text === ''} onClick={handleSubmit} variant="contained">Guardar</Button>
          </div>
        </div>
      </ModalDetail>
    </div>
  )
}

export default CommentsPage;