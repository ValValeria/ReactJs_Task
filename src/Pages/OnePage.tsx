import React from 'react';
import {useState,useEffect} from 'react';
import { ajax_func } from '../rxjs';
import { Response_A, Post } from '../interfaces';
import {Film} from './Components/Film'
import Spinner from './Components/Spinner';
import Footer from './Components/Footer';
export   function OnePage (props:{match:{params:{id:string},path:string},location:any}){
     
     let [data,changePost]=useState<Post>();
     const url:string=window.location.pathname.endsWith('/')? window.location.pathname: 
      window.location.pathname.concat('/');
     
     useEffect(()=>{
        ajax_func(url)
        .subscribe((value:Response_A)=>{
            if(value.status===200)changePost(value.data);
        })
     },[props.location])

    return (
        <>
       {
           Object.keys(data||{}).length ?
           (
          <div className="posts__area bdsk">
            <div className="posts__wrap bdsk" >
               <div className="posts__content">
                 <Film data={data as Post} location={props.location}/>
               </div>
              </div>
          </div>
           ):<Spinner/>
       }
       <Footer/>
       </>
    )
}