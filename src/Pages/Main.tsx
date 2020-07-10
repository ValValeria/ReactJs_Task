import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';


export default class extends React.Component{

    render(){
        return (
             <main>
                 <div className="banner__area">
                         <div className="banner__wrap">
                              <div className="banner__content">
                                  <div className="banner__image">
                                      <img src='human.svg'/>
                                  </div>
                                  <div className="banner__titles">
                                      <div>
                                          <h6 className="title">The Star Wars</h6>
                                          <p className="decs">All about the movie</p>
                                          <Link to ="/movies" className="a_clear" >
                                             <Button variant="outlined" color="primary" href="#outlined-buttons" className="but_white"> Watch</Button>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                         </div>
                 </div>
             </main>
        )
    }
}