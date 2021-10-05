import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
  },

  title: {
    fontSize: "5rem",
    fontWeight: "700",
    padding: "10px",
  },

  heading: {
    margin: "auto",
  },

  image: {
    margin: "50px",
    width: "50%",
  },
}));

export default useStyles;
