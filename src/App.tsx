import React, {ReactElement} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'
import Footer from './components/Commons/Footer/Footer'
import Header from './components/Commons/Header/Header'

import Forbidden from './components/Forbidden/Forbidden'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

type RouteProp = {exact: boolean, path: string, component: React.FunctionComponent}

const routes: RouteProp[] = [

  { component: Login
  , exact    : true
  , path     : '/'         },

  { component: Home
  , exact    : true
  , path     : '/home'     },

  { component: Profile   
  , exact    : true      
  , path     : '/profile'  },

  { component: Forbidden 
  , exact    : true      
  , path     : '/forbidden'},
]

function App(): ReactElement {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          {routes.map((route: RouteProp) => <Route { ... route } />)}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
