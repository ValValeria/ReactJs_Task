import React ,{useState,useEffect} from 'react';
import { Post } from '../../interfaces';
import CardArea from './CardArea'
import Paginator from './Paginator'
import {Subject} from 'rxjs';
import {auditTime } from 'rxjs/internal/operators';
import Spinner from './Spinner';

export const click=new Subject<"prev"|"next">();

export default function (props:{posts:Post[],isClicked:boolean}){
   let [posts,update]=useState<{posts:Post[],counter:[number,number]}>({posts:[],counter:[0,2]});
   const step=2
   useEffect(()=>{
    update(Object.assign({posts:props.posts.slice(0,2),counter:[0,2]}))
   },[props.posts])

   click.pipe(auditTime(700)).subscribe((value)=>{
     let _posts:any
     if(value==="next"){
        _posts={posts:props.posts.slice(posts.counter[1],posts.counter[1]+step),counter:[posts.counter[1],posts.counter[1]+step]}
     }else if (value==="prev"){
       _posts={posts:props.posts.slice(posts.counter[0]-step,posts.counter[0]),counter:[posts.counter[0]-step,posts.counter[0]]}
     }
     update(_posts);
   })
   return (
    <div className="posts__content__cards">
       {posts.posts.length?<CardArea posts={posts.posts}/>:<Spinner/>}
       {!props.isClicked ?<div className="pad_26"><Paginator /></div> :null}
    </div>
   )
}