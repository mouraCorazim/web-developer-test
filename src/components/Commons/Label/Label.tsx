import {ReactElement, createElement} from 'react'
import { LabelProps } from '../../../types'

export default function Label(props: LabelProps): ReactElement{
    return createElement('label', {className: "", ...props})
}