import React from "react";

import {Switch,Route} from 'react-router-dom';
function App() {
   return ( <Switch>
    <Route exact path="/">This is Home Page</Route>
    <Route path="/starred">This is starred Page</Route>
  
    <Route >This is</Route>
  
  </Switch>
   )};

export default App;