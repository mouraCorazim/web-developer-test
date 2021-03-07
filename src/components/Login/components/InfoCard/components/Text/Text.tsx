import {ReactElement, createElement} from 'react'
import {InfoCardTextProps} from '../../../../../../types'
import "./Text.css"

export default function InfoCardText(props: InfoCardTextProps): ReactElement{

    const infoCardTextProperties = {
        className: "info-card-text"
    }

    return createElement('p', infoCardTextProperties, props.text)
}