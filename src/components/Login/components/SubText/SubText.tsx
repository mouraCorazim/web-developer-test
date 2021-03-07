import {ReactElement, createElement} from 'react'
import {SubTextProps} from '../../../../types'
import "./SubText.css"

export default function SubText(props: SubTextProps): ReactElement{

    const subTextProperties = {
        className: "sub-text"
    }

    return createElement('p', subTextProperties, props.text)
}