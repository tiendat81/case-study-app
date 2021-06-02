import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  home: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
  },
  button: {
    textTransform: 'none',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.home}>
            <NavLink exact to="/" className={classes.navLink}>
              <Button className={classes.button} color="inherit">
                Home
              </Button>
            </NavLink>
          </Typography>
          <NavLink exact to="/" className={classes.navLink}>
            <Button className={classes.button} color="inherit">
              Counter
            </Button>
          </NavLink>
          <NavLink to="/employee" className={classes.navLink}>
            <Button className={classes.button} color="inherit">
              Employee
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
