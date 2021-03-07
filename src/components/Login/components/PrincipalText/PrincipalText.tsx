import {ReactElement, createElement} from 'react'
import {PrincipalTextProps} from '../../../../types'
import "./PrincipalText.css"

export default function PrincipalText(props: PrincipalTextProps): ReactElement{

    const principalTextProperties = {
        className: "principal-text"
    }

    return createElement('p', principalTextProperties, props.text)
}