import React from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import ReactTimeAgo from "react-time-ago";

const Comments = (props) => {
  const {content } =  props;
  return (
    <div className="flex flex-col w-full justify-center">
      <h1 style={{ color: '#35D461' }} className="text-4xl font-bold ">Comentarios</h1>
      {
        content?.map((item, index) => (
          <Paper key={`item-${item.name}-${index+1}`} style ={{ backgroundColor: '#FFF082'}} elevation={5} className="p-5 m-5 sm:w-1/2">
            <Grid container style ={{ backgroundColor: '#FFF082'}} spacing={2}>
              <Grid item>
                <Avatar sx={{ width: 56, height: 56 }} alt="<3" src={item.avatar} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ color: '#37B6F6', fontWeight: 'bold', margin: 10, textAlign: "left" }}>{item.name}</h4>
                <p className="overflow-ellipsis p-2" style={{ textAlign: "left" }}>
                  {item.content}
                </p>
                <p className="pt-5" style={{ textAlign: "left", color: "#882FF6", fontWeight: 'bolder' }}>
                  <ReactTimeAgo date={item.time} timeStyle="twitter"/>
                </p>
              </Grid>
            </Grid>
          </Paper>
        ))
      }
    </div>
  );
}

export default Comments;