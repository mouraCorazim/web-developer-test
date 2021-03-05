import {ReactElement, createElement} from 'react'
import {SubTextProps} from '../../../../types'

export default function SubText(props: SubTextProps): ReactElement{
    return createElement('p', {className: ""}, props.text)
}