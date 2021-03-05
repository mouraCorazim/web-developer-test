import {ReactElement, createElement} from 'react'
import { InputProps } from '../../../types'

export default function Input(props: InputProps): ReactElement{
    return createElement('input', {className: "", ...props})
}