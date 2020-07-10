import React,{useState,useCallback} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position:'absolute',
    top:65,
    left:0,
    zIndex:345674
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

 function MenuComponent(props:{isClicked:boolean}){
      const classes = useStyles();
      const [state,updateState]=useState(props.isClicked);
      React.useMemo(()=>{
        if(props.isClicked!=state) {
          updateState(props.isClicked)
        }
      },[props])
      return (
          <div>
              { ( state) &&
              <div >
                 <Card className={classes.root}>
                  <CardActions>
                    <Button size="small" onClick={()=>updateState(false)}>
                      <Link to={"/"} className="a_clear"  onClick={()=>updateState(false)}>Main</Link>
                    </Button>
                    <Button size="small" onClick={()=>updateState(false)}>
                      <Link to={"/movies"} className="a_clear"  onClick={()=>updateState(false)}>Movies</Link>
                    </Button>
                   </CardActions>
                 </Card>
              </div>
              }
          </div>
      )
}
export default MenuComponent