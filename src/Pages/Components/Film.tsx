import React,{useState,useEffect,useMemo} from 'react';
import { t } from '../../interfaces';
import { whatToShow } from '../whatToShow';
import { FilmsCardMain } from './FilmsComponent/FilmsCardMain';
import Spinner from './Spinner';
import { FilmsCardNotMain } from './FilmsComponent/FilmsCardNotMain';

export function Film(props:{data:t,location:any}){
  const [data,updateData]=useState<{main:t[],notMain:t[]}>();
  useMemo(()=>{
    if(window.location.pathname.includes('/films')){
      const item=whatToShow['films'];
      updateData(item)
    }
    if(window.location.pathname.includes('/planets')){
      const item=whatToShow['planets'];
      updateData(item)
    }
    if(window.location.pathname.includes('/starships')){
      const item=whatToShow['starships'];
      updateData(item)
    }

  },[props.location]);
  const func:(array:any[],boolean:Function,bool:(some:any)=>boolean)=>any[]
   =(array:any,boolean:Function,bool:(some:any)=>boolean)=>{
        return array.map((elem:any)=>{
          if(boolean(elem)){
              return { [elem]:props.data[elem]}
          }
        }).filter((value:any)=>value)
  }
  const elements= func(data?.main||[], props.data.hasOwnProperty.bind(props.data),(elem:any)=>true)
  const notMain= func(data?.notMain||[], props.data.hasOwnProperty.bind(props.data),(elem:any)=>!data?.main.includes(elem))

 
  return (
    <div className="posts__items__page">
          <div className="posts__items__heading">
                <div>
                 <div className="posts__items__heading__title">
                          Short information 
                  </div>
                  <div className="posts__items__content">
                       {elements.length? <FilmsCardMain data={elements}/> :null}
                  </div>
                </div>
          </div>

          <div className="posts__items__other">
                  <div className="posts__items__heading__title" style={{color:" #626262"}}>
                          All information 
                  </div>
                  <div className="posts__items__content">
                       {elements.length? <FilmsCardNotMain data={notMain} location={props.location}/> :<Spinner/>}
                  </div>
          </div>
    </div>
  )
}