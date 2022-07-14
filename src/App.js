import React from "react";
import {Switch,Route} from 'react-router-dom';
import Show from "./pages/Show";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import {ThemeProvider} from 'styled-components'
const theme = {
   mainColors: {
     blue: '#2400ff',
     gray: '#c6c6c6',
     dark: '#353535',
   },
 };
 
 
// app.use(cors());
function App() {
   return (
   <ThemeProvider theme={theme}>
      <Switch>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/starred"><Starred/></Route>
    <Route exact path="/shows/:id"><Show/>
       </Route>
    <Route >This is 404 Page</Route>
  
      </Switch>
   </ThemeProvider>
   )};

export default App;
