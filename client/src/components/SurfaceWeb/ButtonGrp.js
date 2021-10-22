import { ButtonGroup, Button } from "@material-ui/core";
import useStyles from "./styles";

const ButtonGrp = ({ isKeyword, setIsKeyword, setForm, initialState }) => {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonGrpContainer} variant="contained">
      <Button
        className={!isKeyword ? classes.blackButtonGrp : classes.whiteButtonGrp}
        onClick={() => {
          setIsKeyword(false);
          setForm(initialState);
        }}
      >
        URL
      </Button>
      <Button
        className={isKeyword ? classes.blackButtonGrp : classes.whiteButtonGrp}
        onClick={() => {
          setIsKeyword(true);
          setForm(initialState);
        }}
      >
        Keyword
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGrp;
