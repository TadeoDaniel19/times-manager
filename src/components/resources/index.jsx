import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Book from "../../assets/book.png"
export default function AlignItemsList(props) {
  const { content } = props;
  return (
    <List className="w-full bg-yellow-200" sx={{ width: '100%', maxWidth: 860 }}>
      {
        content.map((item, index, { length }) => (
          <React.Fragment key={`item-${item.name}-${index + 1}`}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.name} src={Book} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      style={{ display: 'inline', fontWeight: 'bold' }}
                      component="span"
                      variant="h6"
                      color="#F99D07"
                    >
                      {`Subido por: ${item.name}`}
                    </Typography>
                  </React.Fragment>
                }
              />
              <div>
                <a className="text-lg font-bold" style={{ textDecoration: 'underline', color: '#35D461' }} href={item.link}>Link del recurso</a>
              </div>
            </ListItem>
            {
              index + 1 !== length && <Divider style={{ color: 'red' }} variant="fullWidth" component="li" />
            }

          </React.Fragment>
        ))
      }
    </List>
  );
}