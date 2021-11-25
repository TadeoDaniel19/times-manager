import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { Check } from '@mui/icons-material';
import randomColor from 'randomcolor';

export default function BasicTable(props) {
  const { rows, columns } = props;
  const getInitials = (name) => {
    let initials = name.split(" ");
    if (initials.length > 1) {
      initials = initials?.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 2);
    }
    return initials.toUpperCase();
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: '#35D461' }}>
          <TableRow>
            {
              columns?.map((item) => (
                <TableCell style={{ fontWeight: 'bold'}} key={item}>{item}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`item-${row.name}-${index + 1}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ backgroundColor: '#F99D07', width: '50px'}} component="th" scope="row">
                <Avatar sx={{ bgcolor: randomColor() }}>{getInitials(row.name)}</Avatar>
              </TableCell>
              <TableCell style={{ backgroundColor: '#F9E104', fontWeight: 'bold', width: '250px'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  style={{ backgroundColor: '#882FF6', color: 'white', fontWeight: 'bold', width: '50px'}} component="th" scope="row">{row.date}</TableCell>
              <TableCell style={{ backgroundColor: '#37B6F6', color: 'white', fontWeight: 'bold',  width: '50px'}}  component="th" scope="row">{<Check style={{ fill: 'green' }}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}