import {createElement, ReactElement, useState} from 'react'
import { RouteProp } from '../../types'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useLocation
} from 'react-router-dom'

import {TransitionGroup, CSSTransition} from 'react-transition-group'

import "./Home.css"

import Footer from '../commons/Footer/Footer'
import Header from '../commons/Header/Header'
import Following from './components/Following/Following'
import Repositories from './components/Repositories/Repositories'
import Profile from './components/Profile/Profile'
import Line from '../commons/Line/Line'
import HomeMenu from './components/Menu/Menu'

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

    const [selected, setSelected] = useState(0)
    
    return (
        <>
            <Header 
                children = {createElement(HomeMenu, {image: ""})}/>

            <Line />

            <Router>
                <nav>
                    <div className = {"dot-" + selected}></div>
                    <div className = "nav-links">
                        <Link
                            className = {selected === 0? "home-link-selected": "home-link"}
                            onClick   = {() => setSelected(0)}
                            to        = "/home/repositories" > repositories </Link>
                        <Link
                            className = {selected === 1? "home-link-selected": "home-link"}
                            onClick   = {() => setSelected(1)}
                            to        = "/home/following" > following </Link>
                        <Link
                            className = {selected === 2? "home-link-selected": "home-link"} 
                            onClick   = {() => setSelected(2)}
                            to        = "/home/profile" > profile </Link>
                    </div>

                    <Line />

                </nav>

                <section >
                    <Switch
                        children = {routes.map((route: RouteProp, key: number) => createElement(Route, { key: key, ...route }))} />
                </section>
            </Router>

            <Line />

            <Footer />
        </>
    )
}