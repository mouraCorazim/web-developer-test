import React, {ReactElement, createElement} from 'react'
import {PrincipalTextProps} from '../../../types'

export default function PrincipalText(props: PrincipalTextProps): ReactElement{
    return createElement('p', {className: ""}, props.text)
}