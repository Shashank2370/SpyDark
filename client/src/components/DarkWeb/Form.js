import { Fragment } from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Form = ({ form, submitHandler, changeHandler, isKeyword }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={2}>
      <Typography className={classes.title}>
        Crawl {isKeyword ? "Keyword" : "URL"}
      </Typography>
      <form onSubmit={submitHandler}>
        {!isKeyword && (
          <Fragment>
            <TextField
              className={classes.input}
              type="url"
              name="url"
              label="URL"
              value={form.url}
              onChange={changeHandler}
              fullWidth
            />
            <br />
          </Fragment>
        )}
        {isKeyword && (
          <Fragment>
            <TextField
              className={classes.input}
              type="keyword"
              name="keyword"
              label="Keyword"
              value={form.keyword}
              onChange={changeHandler}
              fullWidth
            />
            <br />
          </Fragment>
        )}
        <TextField
          className={classes.input}
          type="number"
          name="depth"
          label="Depth"
          maxValue={3}
          value={form.depth}
          onChange={changeHandler}
          fullWidth
        />
        <br />
        <Button className={classes.blackButton} type="submit">
          Crawl
        </Button>
        <Button
          className={classes.whiteButton}
          type="submit"
          to="/"
          component={Link}
        >
          Back
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
