import React from 'react'
import{
  BrowserRouter as Router,
 Routes as Switch,
  Route,
  Link,
}
from "react-router-dom";
import Topnay from './components/Topnay';
import Home from './components/Home';
import Contect from './components/Contect';
import About from './components/About';
import { Experiences } from './components/Experiences';
import { Project } from './components/Project';



function App() {
  return (
   <Router>
    <div>
    <Topnay></Topnay>
    
   
   <Switch>
    <Route path="/home" element={<Home/>}>
    </Route>
    <Route path="/contect" element={<Contect/>}>
    </Route>
    
    
    

    <Route path="/about" element={<About/>}>
    </Route>

    <Route path="/experiences" element={<Experiences/>}>
    </Route>

    <Route path="/Project" element={<Project/>}>
    </Route>

    
   
   </Switch>
   </div>
   </Router>

  );
}

export default App;
