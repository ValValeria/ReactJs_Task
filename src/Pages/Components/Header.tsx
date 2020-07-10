import React, { ChangeEvent } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Menu_Links from './Menu';
import {useState} from 'react';
import SearchItem from '../VerySmallComp/SearchItems'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth:200,
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [state,changeState]=useState(false);
  const [searcquery,changeQuery]=useState(``);
  const [show,changeShow]=useState(true);

  const change=(event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        changeQuery(event.target.value);
  }
  return (
    <div className={classes.root} onMouseLeave={()=>changeShow(false)}
    onMouseEnter={()=>changeShow(true)}
    >
      <AppBar position="static">
        <Toolbar>
           <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>changeState((state)=>{return !state})}
           >
            <MenuIcon />
           </IconButton> 
           <Menu_Links isClicked={state} />
          <Typography className={classes.title} variant="h6" noWrap>
            Movie App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon  />
            </div>
            <InputBase
              placeholder="Поиск по названию "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={change}
            />
          </div>
          <SearchItem value={searcquery} show={show}  />
        </Toolbar>
      </AppBar>
    </div>
  );
}
