import {createElement, ReactElement} from 'react'
import { RouteProp } from '../../types'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Following from './components/Following/Following'
import Repositories from './components/Repositories/Repositories'
import Profile from './components/Profile/Profile'

const routes: RouteProp[] = [

    { component: Following, 
      exact    : true, 
      path     : '/home/following'   },
  
    { component: Repositories, 
      exact    : true, 
      path     : '/home/repositories' },
    
    { component: Profile, 
      exact    : true, 
      path     : '/home/profile' }
  ]

export default function Home(): ReactElement{
    return (
        <>
            <Header 
                children = {"Header"}/>
                
            <h1>Home</h1>

            <Router>
                <Link
                    to = "/home/following" > following </Link>
                <Link
                    to = "/home/repositories" > repos </Link>
                <Link
                    to = "/home/profile" > profile </Link>
                <Switch>
                    {routes.map((route: RouteProp, key: number) => createElement(Route, { key: key, ...route }))}
                </Switch>
            </Router>
            
            <Footer />
        </>
    )
}