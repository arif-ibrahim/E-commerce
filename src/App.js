import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';


const Hats = ()=><h3>hats page</h3>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats'><Hats/></Route>
      </Switch>
    </div>
  );
}

export default App;
