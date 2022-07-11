import React from "react";
import Navs  from "./components/Navs";
import {Switch,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
   return (
   <div>
         <Navs/>
      <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/starred"><Starred/></Route>
    <Route >This is 404 Page</Route>
  
      </Switch>
   </div>
   )};

export default App;
