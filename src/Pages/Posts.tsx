import React from 'react';
import {useEffect,useState} from 'react';
import { connect } from "react-redux";
import {getData} from '../store/functions'
import { State, Post } from '../interfaces';
import Content from './Components/Content';
import {Subject} from 'rxjs'
import { ButtonGroup, Button } from '@material-ui/core';
import Footer from './Components/Footer';
export const change_posts=new Subject<Post[]>();

function Some(props:{getData:Function,posts:Post[],location:{search:string}}){
  let letters=Array.from(new Set(props.posts.map((elem)=>elem.title.trim().slice(0,1))));
  let [state,changeState]=useState(props.posts);
  let [isClicked,changeClick]=useState(false)

  useEffect(()=>{
    if(!props.posts.length)props.getData();
    else if(props.posts.length) {
      changeState(props.posts)
      change_posts.next(props.posts);
    }
  },[props.posts]);

  let sort=(a:Post,b:Post)=>{
    let first=a.episode_id;
    let second=b.episode_id;
    if (first<second || first>second) {
      return first>second ? 1:-1;
    }
    return 0;
  }

  let click=(el?:string|null)=>{
   if(el){
     changeState(props.posts.filter(elem=>elem.title.startsWith(el)));
     changeClick(true)
   }else {
     changeState(props.posts);
     changeClick(false)
   }
  }
  return (
     <div className="posts__area">
          <div className="posts__wrap">
             <div className="part__one">
             <div><h5>Сортировка фильмов </h5></div>
             <div className="button__group">
             <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {
                      letters.map(elem=>{
                        return <Button key ={Math.random()} onClick={click.bind(null,elem)}>{elem}</Button>
                      })
                    }
                    <Button  onClick={(event)=>click(null)} key={Math.random()}> Show all</Button>
            </ButtonGroup>
             </div>
             </div>
             <div className="posts__content">
                 <Content posts={state.sort(sort)} isClicked={isClicked}/>
             </div>
          </div>
          <Footer/>
     </div>
  )
}

function mapStateToProps(state:State) {
    return {
      posts: state.data
    };
}
export default connect(mapStateToProps,{getData})(Some);