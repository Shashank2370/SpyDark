import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Results = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Links</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component={Link} scope="row" align="center">
              i
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Results;
