import React, { Fragment, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import useStyles from "./styles";

const DarkWebDashboard = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  //   const mobileView = (
  //     <Menu
  //       keepMounted
  //       anchorEl={anchorEl}
  //       open={Boolean(anchorEl)}
  //       onClose={handleClose}
  //     >
  //       <MenuItem onClick={handleClose} component={Link} to="/">
  //         Add
  //       </MenuItem>
  //       <MenuItem onClick={handleClose} component={Link} to="/distributedP2P">
  //         Update
  //       </MenuItem>
  //       <MenuItem onClick={handleClose} component={Link} to="/distributedP2P">
  //         Delete
  //       </MenuItem>
  //     </Menu>
  //   );

  return (
    <Fragment>
      <AppBar
        style={{ backgroundColor: "black", color: "white" }}
        position="static"
        elevation={0}
      >
        <Toolbar className={classes.extraMargin}>
          <Typography className={classes.title} variant="h6">
            Dashboard
          </Typography>
          <Grid className={classes.mobile}>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/darkweb/results"
            >
              Results
            </Button>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/darkweb/word-cloud"
            >
              Word Cloud
            </Button>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/darkweb/text-processing"
            >
              Text Processing
            </Button>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/darkweb/image-processing"
            >
              Image Processing
            </Button>
          </Grid>
          {/* <IconButton
            className={classes.desktop}
            color="inherit"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {/* {mobileView} */}
    </Fragment>
  );
};

export default DarkWebDashboard;
