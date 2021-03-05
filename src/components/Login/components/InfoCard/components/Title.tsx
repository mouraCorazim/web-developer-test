import {ReactElement, createElement} from 'react'
import {InfoCardTitleProps} from '../../../../../types'

export default function InfoCardTitle(props: InfoCardTitleProps): ReactElement{
    return createElement('p', {className: ""}, props.text)
}