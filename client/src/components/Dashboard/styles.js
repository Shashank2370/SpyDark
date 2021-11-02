import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100vw",
    margin: "40px",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "600",
    padding: "10px",
  },

  paper: {
    backgroundColor: "white",
    width: "40%",
    margin: "0 auto",
    padding: "50px",
  },

  chart: {
    margin: "0 auto",
    padding: "30px",
    width: "50%",
  },
}));

export default useStyles;
