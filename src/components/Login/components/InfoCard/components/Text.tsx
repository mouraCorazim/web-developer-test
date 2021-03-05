import {ReactElement, createElement} from 'react'
import {InfoCardTextProps} from '../../../../../types'

export default function InfoCardText(props: InfoCardTextProps): ReactElement{
    return createElement('p', {className: ""}, props.text)
}