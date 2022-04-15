import React from 'https://cdn.skypack.dev/react@17.0.1';
import Table from "https://cdn.skypack.dev/@material-ui/core/Table";
import TableBody from "https://cdn.skypack.dev/@material-ui/core/TableBody";
import TableCell from "https://cdn.skypack.dev/@material-ui/core/TableCell";
import TableHead from "https://cdn.skypack.dev/@material-ui/core/TableHead";
import TableRow from "https://cdn.skypack.dev/@material-ui/core/TableRow";
import Paper from "https://cdn.skypack.dev/@material-ui/core/Paper";
import rows from "./rowsFund";

class Prereqfund extends React.Component {
 render () { 
   return (
    <div className="product">
       <h1 className="title">Material UI - Responsive Table</h1>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, calories, fat, carbs, protein }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell numeric>{calories}</TableCell>
              <TableCell numeric>{fat}</TableCell>
              <TableCell numeric>{carbs}</TableCell>
              <TableCell numeric>{protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  )
}
}

export default Prereqfund;
