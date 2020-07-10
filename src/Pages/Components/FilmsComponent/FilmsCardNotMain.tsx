import React, { useEffect, useState } from 'react';
import { t, or } from '../../../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { merge } from 'rxjs';
import { ajax_func } from '../../../rxjs';
import { whatToShow } from '../../whatToShow';
import { SmallCard } from './SmallCard';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function FilmsCardNotMain(props:{data:t,location:any}){
    const classes = useStyles();
    const [data,updateData]=useState<any[]>([]);
    useEffect(()=>{
      console.log('i am called')
      let items=props.data.filter((elem:{[prop:string]:any})=>Array.isArray(Object.values(elem)[0]));
      if(items.length){
          (items as any[]).forEach((links:{[prop:string]:string[]})=>{
               let links_ajax=Object.values(links)[0].map(link=>ajax_func(link,true))
               merge(
                   ...links_ajax
               ).subscribe((value:any)=>{
                   if(!value.data) return;
                   let keys:or[]=["planets","films","starships"];
                   if(keys.includes(Object.keys(links)[0] as or)){
                    let obj:{[props in or]:string}|{}[]=whatToShow[Object.keys(links)[0] as or ].main.map((elem)=>{
                      if(elem in value.data){
                          return {[elem]:value.data[elem]}
                      }return {}
                    }).filter(v=>v)?.concat([{url:value.url}]);
                    if(Object.keys(obj).length){
                         
                         let obj2:any[]=props.data.concat([]);
                         let updates:number=obj2.findIndex(elem=>Object.keys(elem)[0]==Object.keys(links)[0]);
                         if(~updates){
                          obj2[updates][Object.keys(links)[0]].push(obj);
                          obj2[updates][Object.keys(links)[0]]=obj2[updates][Object.keys(links)[0]].filter((elem:any)=>(typeof (elem)!=="string"))
                         }
                         updateData(obj2);
                    }
                   }
               })
          })
      } else updateData(props.data)
    },[props.location]);

    return (
        <>
        {
           data.length?
            data.map((obj:any)=>{
                let key=Math.random();
                return (
     <Accordion key={Object.keys(obj)[0]}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel1a-content"+key}
          id={"panel1a-header"+key}
        >
          <Typography className={classes.heading}>{Object.keys(obj)[0].replace(/\_id/,'').replace(/\_/,' ')}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
          {Array.isArray(obj[Object.keys(obj)[0]])?
          <SmallCard data={obj[Object.keys(obj)[0]]}/>:
          obj[Object.keys(obj)[0]]
          }
          </Typography>
        </AccordionDetails>
      </Accordion>
                )
            })
          :  (
            <div className="for_spinner">
              <CircularProgress disableShrink/>
            </div>
          )
        }
        </>
    );
}