import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Main from './Pages/Main';
import Posts from './Pages/Posts';
import Header from './Pages/Components/Header';
import { OnePage } from './Pages/OnePage';
class App extends React.Component{
  render(){
     return (
        <>
        <Header/>
        <Switch> 
              <Route exact path="/" component={Main}/>
              <Route  path="/movies" component={Posts}/>
              <Route  path="/films/:id" component={OnePage}/>
              <Route  path="/planets/:id" component={OnePage}/>
              <Route  path="/starships/:id" component={OnePage}/>
              <Route  path="" component={Main}/>
        </Switch>
        </>
     )
  }
}

export default App;
