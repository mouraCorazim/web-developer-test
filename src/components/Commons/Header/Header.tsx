import {createElement, ReactElement} from 'react'
import {HeaderProps} from '../../../types'

export default function Header(props: HeaderProps): ReactElement{
    return createElement('header', {className: ""}, props.children)
}