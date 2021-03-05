import {ReactElement, createElement} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'

import Forbidden from './components/Forbidden/Forbidden'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Home/components/Profile/Profile'
import { RouteProp } from './types'

const routes: RouteProp[] = [

  { component: Login, 
    exact    : true, 
    path     : '/'         },

  { component: Home, 
    exact    : true, 
    path     : '/home'     },

  { component: Forbidden, 
    exact    : true, 
    path     : '/forbidden'},
]

function App(): ReactElement {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route: RouteProp, key: number) => createElement(Route, { key: key, ...route }))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
