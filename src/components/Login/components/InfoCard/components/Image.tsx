import {ReactElement, createElement} from 'react'
import {InfoCardImageProps} from '../../../../../types'

export default function InfoCardImage(props: InfoCardImageProps): ReactElement{
    return createElement('div', {className: ""}, props.svg)
}