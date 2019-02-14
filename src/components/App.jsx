import React from "react";
import Header from './Header';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;


function App(){
  return (
    <div>
      <GlobalStyles />
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
