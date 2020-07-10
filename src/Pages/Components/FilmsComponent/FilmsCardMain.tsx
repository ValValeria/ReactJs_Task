import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { t } from '../../../interfaces';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export  function FilmsCardMain(props:{data:t}) {
  const classes = useStyles();
  const entries:any=props.data||[];
  return (
    <>
    { entries.length &&
      [entries.map((obj:any)=>{
        return (
        <div  key={Math.random()} className="films_card_main">
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {Object.keys(obj)[0].replace(/\_id/,'')}
          </Typography>
        </CardContent>
      </div>
     <CardContent>
         <Typography variant="h6"  color="textSecondary">
            {obj[Object.keys(obj)[0]]}
          </Typography>
     </CardContent>
    </Card>
        </div>
        )
      })]
    }
    </>
  );
}
