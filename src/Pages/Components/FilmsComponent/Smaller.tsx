import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


export function Item(props:{data:any}){
   return (
       <>
     {Object.entries(props.data).map(([key,value])=>{
       if(String(Object.keys(value as object)[0])==="url"){
           let url=String(Object.values(value as object)[0]).replace('http://swapi.dev/api','')
           console.log(url)
           return (<Link to={url} className="a_clear sf">
                    <Button  variant="contained" color="primary" >Read</Button>
                 </Link>)
       }
       return (
    <List key={Math.random()}>
      <ListItem alignItems="flex-start">
        <div>
           <div className="small__card__title">{String(Object.keys(value as object)[0]) }</div>
           <span>{String(Object.values(value as object)[0])}</span>
        </div>
      </ListItem>     
    </List>
       );
     })}
      </>
   )
}