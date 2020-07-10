import React ,{useEffect,useState}from 'react';
import {change_posts} from '../Posts';
import { Post } from '../../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { filter } from 'rxjs/internal/operators';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      paddingLeft:20,
      paddingRight:20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
export default function(props:{value:string,show:boolean}){
   const [queries,change]=useState<Post[]>([]);

   const classes = useStyles();

   change_posts.pipe(filter((value)=>Boolean(value.length))).subscribe((posts)=>{
         change(()=>{
           return posts;
         });
    });

   let elements= ()=>{
     let con:any[]=queries.filter((elem)=>{
        return elem.title.toLocaleLowerCase().includes(props.value.toLocaleLowerCase())
     })
    return con.map((elem)=>{
      return (
          <ListItem key={elem.title}>
                      <ListItemText id="switch-list-label-wifi" primary={elem.title} />
                       <ListItemSecondaryAction>
                         <Link to={`/films/${elem.episode_id}`} className="not_textdeco">
                          <Button variant="outlined" color="primary" >
                             Link
                           </Button>
                         </Link>
                       </ListItemSecondaryAction>
          </ListItem>
      )
   })}
   return (
       <>
      {
          (props.value.length && props.show)?
         (
           <div className="search__items" >
            <Card className={classes.root}>
                <List subheader={<ListSubheader>Results </ListSubheader>} className={classes.root}>
                    {elements()}
                 </List>
            </Card>
           </div>
         ):null
      }
      </>
   )
}