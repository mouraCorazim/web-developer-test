import {ReactElement, createElement} from 'react'
import {InfoCardTitleProps} from '../../../../../../types'
import "./Title.css"

export default function InfoCardTitle(props: InfoCardTitleProps): ReactElement{

    const infoCardTitleProperties = {
        className: "info-card-title"
    }

    return createElement('p', infoCardTitleProperties, props.text)
}