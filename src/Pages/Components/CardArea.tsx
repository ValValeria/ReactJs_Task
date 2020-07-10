import React from 'react';
import { Post } from '../../interfaces';
import Card from './Card'
export default class extends React.Component<{posts:Post[]}>{
    interval:any;
    constructor(props:{posts:Post[]}){
        super(props);
        
    }

    render(){
        if(!this.props.posts.length) return null;
        let cards=this.props.posts.map((elem,index)=>{
            return <Card data={elem} key={index}/>
        })
        return (
            <div className="cardarea__items">
                   {cards}
            </div>
        )
    }
}