import {ReactElement, createElement} from 'react'
import {InfoCardImageProps} from '../../../../../../types'
import "./Image.css"

export default function InfoCardImage(props: InfoCardImageProps): ReactElement{

    const infoCardImageProperties = {
        className: "info-card-image",
        src: props.svg
    }

    return createElement('img', infoCardImageProperties)
}