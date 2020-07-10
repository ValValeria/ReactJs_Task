import React from 'react';
import { Post } from '../../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Link } from 'react-router-dom';
import  json from '../SomeData/images';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:16
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  avatar: {
    backgroundColor: red[500],
  },
  but:{
    marginLeft: 8,
    marginBottom: 10
  }
}));

export default  function CardItems(props:{data:Post,key:number}){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const image:undefined|string=Object.entries(json.films).find(([key,value])=>{
        return key.trim()===props.data.title.trim();
    })?.[1];
    const zapasnoy_url="http://3.bp.blogspot.com/-0eDg78C2t0I/UATwi7LmdQI/AAAAAAAAAZA/rhZkcpynmAg/s1600/Classical-Wallpaper-Darth-Vader-star-wars-25852934-1920-1080.jpg";

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.data.episode_id}
          </Avatar>
        }
        title={props.data.title}
        subheader={props.data.release_date}
      />
      <CardMedia
        className={classes.media}
        image={image?image:zapasnoy_url}
        title="Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.opening_crawl?.split(' ',10).join(' ').concat(' ...')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link className="a_clear" to={`films/${props.data.episode_id}`}>
          <Button variant="contained" className={classes.but}>
              Read
          </Button>
        </Link>
      </CardActions>
    </Card>
    )
}