import {ReactElement, createElement } from 'react'
import {CardsWrapperProps} from '../../../../types'

export default function CardsWrapper(props: CardsWrapperProps): ReactElement{
    return createElement('div', {className: ""}, props.children)
}