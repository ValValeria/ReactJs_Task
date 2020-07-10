import React from 'react';

import { Button, CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import { Item } from './Smaller';

type fs=string&{url:string};




export function SmallCard(props:{data:fs[]}){
  
    if(!(props.data.length)) return  <div><CircularProgress disableShrink/></div>;


    let url:string=props.data[0].url||``;
    let url2:string=url.slice(url.indexOf('https://swapi.dev/api')+`https://swapi.dev/api`.length);
    if(url2.length){
        url=url2
    }
  
    return (

     <div   className="films_card_main">
       {
         [props.data.map((elem:any)=>{
          return(
          <Card key={Math.random()}>
               <Item data ={elem}/>
          </Card>)
         })]
       }
    </div>

    )
}