import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },

  button: {
    color: "black",
    backgroundColor: "white",
    margin: "10px",
  },

  loading: {
    fontSize: "1.3rem",
    padding: "40px",
    color: "black",
    backgroundColor: "white",
    borderRadius: "7px",
    textAlign: "center",
  },
}));

export default useStyles;
