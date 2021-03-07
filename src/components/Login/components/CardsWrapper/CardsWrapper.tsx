import {ReactElement, createElement } from 'react'
import {CardsWrapperProps} from '../../../../types'

import './CardsWrapper.css'

export default function CardsWrapper(props: CardsWrapperProps): ReactElement{

    const wrapProperties = {
        className: "cardsWrapper"
    }

    return createElement('div', wrapProperties, props.children)
}