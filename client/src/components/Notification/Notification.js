import {
  Backdrop,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";

const Notification = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={false}>
      <div className={classes.loading}>
        <CircularProgress color="black" />
        <Typography variant="subtitle1">Loading...</Typography>
        <Button className={classes.button} size="small">
          Close
        </Button>
      </div>
    </Backdrop>
  );
};

export default Notification;
