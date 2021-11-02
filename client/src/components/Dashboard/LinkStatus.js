import { Paper, Typography } from "@material-ui/core";
import { createChart } from "../../utils/createChart";
import useStyles from "./styles";

const LinkStatus = () => {
  const classes = useStyles();

  const chart = createChart();

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Typography className={classes.title}>Link Status</Typography>
        <div className={classes.chart}>{chart}</div>
      </Paper>
    </div>
  );
};

export default LinkStatus;
