import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar.js';
import Home from "./Home";
import Produkter from './Components/produkter/Produkter.js';
import Resjer from './Components/rejser/Rejser.js';
import DykkerKort from './Components/dykkeceritfinkat/DykkerKort.js';
import footer from './Components/footer.js';
import Header from './Components/navbar/Header.js'
import LogIn from './Components/login-form/LogIn.js';




const App = () => {


    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/Scubaliving/' component={Home} />
            <Route path='/Scubaliving/Produkter' component={Produkter} />
            <Route path='/Scubaliving/Resjer' component={Resjer} />
            <Route path="/Scubaliving/DykkerKort" component={DykkerKort} />
            <Route path="/Scubaliving/footer" component={footer} />
            <Route path="/Scubaliving/Header" component={Header} />
            <Route path="/Scubaliving/Login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }


export default App

