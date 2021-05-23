/*import React from 'react';*/
import './App.css';
import React, { useState } from 'react'

import Home from './Home'
import Countries from './Countries'
import Cities from './Cities'
import morocco from './Articles/morocco'
import thailand from './Articles/thainland'
import finland from './Articles/finland'
import china from './Articles/china'
import russia from './Articles/russia'
import malta from './Articles/malta'
import mexico from './Articles/mexico'
import spain from './Articles/spain'
import japan from './Articles/japan'
import casa from './Articles/Cities/casablanca'
import chaou from './Articles/Cities/chaouen'
import essaoui  from './Articles/Cities/essaoui'
import shang  from './Articles/Cities/shanghai'
import peki  from './Articles/Cities/pekin'
import hongo  from './Articles/Cities/hong'
import phuk  from './Articles/Cities/phuket'
import spa  from './Articles/Cities/madrid'
import mos  from './Articles/Cities/moscow'


import {Route , Link} from "react-router-dom"
import Login from "./containers/Login";
import { AppContext } from "./libs/contextLib";

import Header from './Header'



function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div classname="App">
      <Route exact path="/login">
        <Login />
      </Route>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/Articles/morocco" component={morocco} />
      <Route exact path="/Articles/finland" component={finland} />
      <Route exact path="/Articles/china" component={china} />
      <Route exact path="/Articles/russia" component={russia} />
      <Route exact path="/Articles/thainland" component={thailand} />
      <Route exact path="/Articles/japan" component={japan} />
      <Route exact path="/Articles/mexico" component={mexico} />
      <Route exact path="/Articles/malta" component={malta} />
      <Route exact path="/Articles/spain" component={spain} />
      <Route exact path="/Articles/Cities/casablanca" component={casa}/>
      <Route exact path="/Articles/Cities/chaouen" component={chaou}/>
      <Route exact path="/Articles/Cities/essaoui" component={essaoui}/>
      <Route exact path="/Articles/Cities/shanghai" component={shang}/>
      <Route exact path="/Articles/Cities/hong" component={hongo}/>
      <Route exact path="/Articles/Cities/pekin" component={peki}/>
      <Route exact path="/Articles/Cities/moscow" component={mos}/>
      <Route exact path="/Articles/Cities/phuket" component={phuk}/>
      <Route exact path="/Articles/Cities/madrid" component={spa}/>
    </div>
   
  );
}


export default App;

