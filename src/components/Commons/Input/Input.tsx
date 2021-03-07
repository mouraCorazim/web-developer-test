import {ReactElement, createElement} from 'react'
import { InputProps } from '../../../types'
import "./Input.css"

export default function Input(props: InputProps): ReactElement{

    const inputProperties = {
        className: "app-input", 
        ...props
    }

    return createElement('input', inputProperties)
}