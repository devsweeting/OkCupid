import React from "react";
import Header from './Header';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
