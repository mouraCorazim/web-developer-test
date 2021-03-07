import {createElement, ReactElement} from 'react'
import {HeaderProps} from '../../../types'
import "./Header.css"

import Logo from "./components/Logo/Logo"

export default function Header(props: HeaderProps): ReactElement{
    return(
        <header>
            <Logo />
            {props.children}
        </header>
    )
}