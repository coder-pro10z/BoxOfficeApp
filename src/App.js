import React from "react";
import {Switch,Route} from 'react-router-dom';
import Show from "./pages/Show";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

// app.use(cors());
function App() {
   return (
   <div>
      <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/starred"><Starred/></Route>
    <Route exact path="/shows/:id"><Show/>
       </Route>
    <Route >This is 404 Page</Route>
  
      </Switch>
   </div>
   )};

export default App;
