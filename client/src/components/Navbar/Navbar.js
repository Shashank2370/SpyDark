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
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import useStyles from "./styles";

const Navbar = () => {
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
            Spydark
          </Typography>
          <Grid className={classes.mobile}>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/login"
            >
              Login
            </Button>
            <Button
              activeClassName={classes.active}
              exact
              className={classes.button}
              component={NavLink}
              to="/signup"
            >
              Signup
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

export default Navbar;
